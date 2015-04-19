
define([ './geom/rect',
         './geom/vec2',
         './geom/matrix'
], 

function(Rect, Vec2, Matrix) {

    function Grid(surfaceSize, offset, cellSize) {
            
        this.offset = Vec2(offset);

        this.cellSize = cellSize;

        this.size = Vec2(Math.ceil(surfaceSize.x / cellSize) + 1,
                         Math.ceil(surfaceSize.y / cellSize) + 1);

        this.grid = Array(this.size.y);

        for(var y = 0; y < this.size.y; ++ y) {

            this.grid[y] = Array(this.size.x);

            for(var x = 0; x < this.size.x; ++ x) {

                this.grid[y][x] = new Grid.Cell(Vec2(x, y), y * this.size.x + x);
            }
        }
    }

    Grid.prototype = {

        pointToGridCoord: function pointToGridCoord(point) {

            return Vec2(Math.floor((this.offset.x + point.x) / this.cellSize),
                        Math.floor((this.offset.y + point.y) / this.cellSize));

        },

        gridCoordToPoint: function gridCoordToPoint(coord) {

            return Vec2.subtract(Vec2.add(Vec2.multiply(coord, this.cellSize),
                                      this.cellSize * 0.5), this.offset);
        },

        at: function at(coord) {

            return this.grid[coord.y][coord.x];

        },

        intersectsCell: function intersectsCell(coord, rects) {

            var cellPos = this.gridCoordToPoint(coord);

            return rects.some(function(rect) {

                return rect.bottomRight.y >= cellPos.y &&
                       rect.topLeft.y <= cellPos.y + this.cellSize &&
                       rect.bottomRight.x >= cellPos.x &&
                       rect.topLeft.x <= cellPos.x + this.cellSize;
            });
        },

        clear: function clear() {

            for(var y = 0; y < this.size.y; ++ y) {

                for(var x = 0; x < this.size.x; ++ x) {

                    var cell = this.grid[y][x];

                    cell.cost = 0;

                }
            }
        }

    };

    Grid.Cell = function(position, index) {

        this.x = position.x;
        this.y = position.y;
        this.index = index;
        this.cost = 0;
        this.parent = null;
        this.directionFromParent = Vec2(0, 0);

    };

    Grid.Cell.prototype = {

        toString: function toString() {

            return 'GridCell@' + this.x + ',' + this.y;

        }
    };

    function extend(a, b) {

        for(var prop in b)
            if({}.hasOwnProperty.call(b, prop))
                a[prop] = b[prop];

        return a;
    }

    return Grid;
});


