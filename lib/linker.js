
define(['./svg',
        './component',
        './geom/rect',
        './geom/vec2',
        './grid' ],
        
function(SVG, Component, Rect, Vec2, Grid) {

function link(surface, obstacles, arcs, opts)
{
    opts = opts || {};

    opts = {

        cellSize: opts.cellSize || 8,

        offset: Vec2(0, 0),
        
        arcDistance: opts.arcDistance || 32,
        arcEndLength: opts.arcEndLength || 32,
        arcTurnLength: opts.arcTurnLength || 20,
        debugPathfinding: opts.debugPathfinding

    };

    var boundingBoxes = [];

    function createBoundingBox(component) {

        var box = Rect(component.bbox());

        box.topLeft = Vec2.add(box.topLeft, opts.offset);
        box.bottomRight = Vec2.add(box.bottomRight, opts.offset);

        /* Use the offset to prevent negative coordinates (which the grid
         * cannot cope with)
         */
        var deltaOffset = Vec2();

        if(box.topLeft.x < 0)
            deltaOffset.x = Math.abs(box.topLeft.x);

        if(box.topLeft.y < 0)
            deltaOffset.y = Math.abs(box.topLeft.y);

        boundingBoxes.push(box);

        adjustOffset(deltaOffset);

        return box;
    }

    function adjustOffset(delta) {

        boundingBoxes.forEach(function(box) {

            box.topLeft = Vec2.add(box.topLeft, delta);
            box.bottomRight = Vec2.add(box.bottomRight, delta);

        });

        opts.offset = Vec2.add(opts.offset, delta);
    }

    obstacles = obstacles.map(createBoundingBox);

    arcs = arcs.map(function(arc) {

        return {

            arc: arc,

            start: extend(createBoundingBox(arc.start.component), {
                direction: arc.start.direction || Vec2(0, -1)
            }),

            end: extend(createBoundingBox(arc.end.component), {
                direction: arc.end.direction || Vec2(0, -1)
            }),

            style: extend(arc.style, {
                fill: 'none'
            })
        };
    });

    console.log(boundingBoxes);

    /* Leave some room for growth, as the arcs may be outside of the bounds
     * of the glyphs.
     */
    var boundingBox = Rect.expand(getBounds(boundingBoxes), 100);

    if(opts.rearrange === true)
        arrangeComponents(surface, boundingBox, obstacles, arcs, opts);

    return routeArcs(surface, boundingBox, obstacles, arcs, opts);
}

function arrangeComponents(surface, boundingBox, obstacles, arcs, opts)
{
    /* TODO: Re-arrange the components into an optimal configuration for the
     * arcs to be drawn.
     */
}

function routeArcs(surface, boundingBox, obstacles, arcs, opts)
{
    var grid = new Grid(Rect.size(boundingBox),
                        Vec2.abs(boundingBox.topLeft),
                        opts.cellSize);

    function getEdgeMidPoint(box, direction) { 

        return Vec2.add(Rect.center(box),
                    Vec2.multiply(Rect.size(box),
                        Vec2.multiply(direction, 0.5)));
    }

    function pointToPathCoord(point) {

        return Vec2.toPathString(Vec2.subtract(point, opts.offset));

    }

    return arcs.map(function(arc) {

        /* The arc always starts travelling perpendicular to the edge it's
         * leaving.
         */
        var startPoint = Vec2.add(getEdgeMidPoint(arc.start, arc.start.direction),
                                        Vec2.multiply(arc.start.direction, opts.arcDistance)),

            endPoint = Vec2.add(getEdgeMidPoint(arc.end, arc.end.direction),
                                    Vec2.multiply(arc.end.direction, opts.arcDistance));

        var startPos = grid.pointToGridCoord(startPoint),
            endPos = grid.pointToGridCoord(endPoint);

        var arcEndGridLength = Math.round(opts.arcEndLength / opts.cellSize);
        var arcTurnGridLength = Math.round(opts.arcTurnLength / opts.cellSize);

        var goals = [
            grid.at(Vec2.add(startPos, Vec2.multiply(arc.start.direction, arcEndGridLength)))
        ];

        var nextDirection;

        if(arc.start.direction.y != 0) {

            if(endPos.x > startPos.x)  {
                nextDirection = Vec2(1, 0);
            } else {
                nextDirection = Vec2(-1, 0);
            }

        } else {

            if(endPos.y > startPos.y)  {
                nextDirection = Vec2(0, 1);
            } else {
                nextDirection = Vec2(0, -1);
            }
        }

        goals.push(grid.at(Vec2.add(goals[0],
            Vec2.multiply(nextDirection, arcTurnGridLength))));

        var endTurn = 
            grid.at(Vec2.add(endPos,
                Vec2.multiply(arc.end.direction, arcTurnGridLength)));

        if(arc.end.direction.y != 0) {

            if(startPos.x > endPos.x)  {
                nextDirection = Vec2(1, 0);
            } else {
                nextDirection = Vec2(-1, 0);
            }

        } else {

            if(startPos.y > endPos.y)  {
                nextDirection = Vec2(0, 1);
            } else {
                nextDirection = Vec2(0, -1);
            }
        }

        goals.push(grid.at(Vec2.add(endTurn,
            Vec2.multiply(nextDirection, arcEndGridLength))));
        
        goals.push(endTurn);

        goals.push(grid.at(endPos));

        var start = grid.at(startPos);

        var path = [
            'M' + pointToPathCoord(grid.gridCoordToPoint(start))
        ];
        
        while(goals.length > 0) {

            var subpath = pathfind(grid, obstacles, start, goals[0], opts.debugPathfinding);


            path = path.concat(subpath.map(function(point) {

                return 'L' + pointToPathCoord(point);

            }));

            start = goals[0];
            goals = goals.slice(1);

            grid.clear();
        }

        var svgPath = surface.path(path.join('\n'));

        svgPath.attr(arc.style);

        if(arc.style.cap === 'arrow') {

            svgPath.marker('end', 10, 10, function(add) {
                add.path('M4,0L10,5L4,10z').stroke('black').fill('black');
            });

        } else if(arc.style.cap === 'line') {

            svgPath.marker('end', 10, 10, function(add) {
                add.path('M5,0L5,10z').stroke('black').fill('none');
            });
        }

        return {
            arc: arc,
            path: svgPath
        };
    });

}

function pathfind(grid, obstacles, start, end, debug) {

    var openSet = {}, closedSet = {};

    adjacent(start).forEach(function(candidate) {

        var node = candidate.node,
            cost = candidate.cost;

        node.parent = start;
        node.gScore = candidate.cost;

        openSet[node.index] = node;

    });

    while(true) {

        var bestNode = null;
        var bestFScore = Number.MAX_VALUE;

        for(var index in openSet) {

            var node = openSet[index];

            var hScore = manhattanDistance(node, end);

            var fScore = node.gScore + hScore;


            if(fScore < bestFScore) {

                bestNode = node;
                bestFScore = fScore;

            }
        }

        if(bestNode === null) {

            /* open list empty
             */

            throw new Error('No route found!  Cannot route arc');
            return;
        }

        if(bestNode === end) {

            return createPath(grid, start, end, debug);
        }

        delete openSet[bestNode.index];
        closedSet[bestNode.index] = bestNode;

        adjacent(bestNode).forEach(function(candidate) {

            var node = candidate.node,
                cost = candidate.cost;

            if(openSet[node.index]) {

                var gScore = bestNode.gScore + cost;

                if(gScore < node.gScore) {

                    node.parent = bestNode;
                    node.gScore = gScore;
                }

            } else {

                node.parent = bestNode;
                node.gScore = bestNode.gScore + cost;

                openSet[node.index] = node;
            }
        });
    }

    function adjacent(node) {

        var adjacent = [];

        if(node.x > 0)
            adjacent.push({ node: grid.at(Vec2(node.x - 1, node.y)), cost: 10 });


        if(node.x < grid.size.x - 1)
            adjacent.push({ node: grid.at(Vec2(node.x + 1, node.y)), cost: 10 });

        if(node.y > 0)
            adjacent.push({ node: grid.at(Vec2(node.x, node.y - 1)), cost: 10 });

        if(node.y < grid.size.y - 1)
            adjacent.push({ node: grid.at(Vec2(node.x, node.y + 1)), cost: 10 });

        return adjacent.filter(function(candidate) {
            
            return !closedSet[candidate.node.index] &&
                   !grid.intersectsCell(candidate.node, obstacles);

        });
    };
}

function createPath(grid, start, end, debug) {

    var gridRoute = [];

    for(; end; end = end.parent) {

        if(end === start)
            break;

        gridRoute.unshift(end);

    }

    var startPoint = grid.gridCoordToPoint(start),
        endPoint = grid.gridCoordToPoint(end);

    var curPoint = Vec2(startPoint);

    return gridRoute.map(grid.gridCoordToPoint.bind(grid));

}

function manhattanDistance(a, b) {

    return Math.abs(b.x - a.x) + Math.abs(b.y - a.y);

}

function extend(a, b) {

    for(var prop in b)
        if({}.hasOwnProperty.call(b, prop))
            a[prop] = b[prop];

    return a;
}


function getBounds(rects) {

    return rects.reduce(function(prev, cur) {

        return {
            topLeft: Vec2.min(prev.topLeft, cur.topLeft),
            bottomRight: Vec2.max(prev.bottomRight, cur.bottomRight)
        };

    });
}


return {
    link: link
};

});

