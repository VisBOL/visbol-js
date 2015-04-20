
define(['./svg',
        './displayList',
        './component',
        './process',
        './linker',
        './geom/rect',
        './geom/vec2',
        './geom/matrix' ],
        
function(SVG, DisplayList, Component, Process, Linker, Rect, Vec2, Matrix) {

    function Design(opts) {

        this.element = opts.element;

        this.surface = SVG(opts.element);

        this.font = opts.font;

        var cellSize = opts.cellSize || 16;

        this.geom = {

            glyphSize: Vec2.multiply(Vec2(cellSize), 3),
            processBoxSize: Vec2.multiply(Vec2(cellSize), 3),
            glyphPadding: cellSize * 2,
            labelOffset: cellSize * 1,
            componentBoxPadding: cellSize * 1,
            arcDistance: cellSize * 1,
            arcEndLength: cellSize * 3,
            arcTurnLength: cellSize * 3
        };

        for(var key in this.geom) {

            var metric = Vec2(this.geom[key]);

            if(metric.x % cellSize !== 0
                || metric.y % cellSize !== 0) {

                throw new Error('geom: ' + key + ' must be a multiple of the cell size');

            }
        }

        this.size = Vec2(640, 480);

        this.components = [];
        this.processes = [];
        this.interactions = [];

        this.obstacles = [];

        this.setDisplayList([]);
    }

    Design.prototype = {

        setDisplayList: function setDisplayList(displayList) {

            this.displayList = new DisplayList(displayList);

            this.redraw();
        },


        getDisplayList: function getDisplayList() {

            return this.displayList;

        },

        redraw: function redraw() {

            var boundingBox = Rect(Vec2(0, 0), this.size);

            var design = this;

            this.obstacles = [];

            this.components.forEach(function(component) {
                component.remove();
            });

            this.processes.forEach(function(process) {
                process.remove();
            });

            this.components = this.displayList.components.map(function(componentObject) {

                var component = Component.render(design, componentObject);

                component.move(10, 300);

                return component;
            });

            this.processes = this.displayList.processes.map(function(processObject) {

                var process = Process.render(design, processObject);

                process.move(10, 300);
                
                return process;
            });

            var group = this.surface.group();

            this.components.forEach(group.add.bind(group));
            this.processes.forEach(group.add.bind(group));

            this.linkInteractions(group);

            var bbox = Rect(group.bbox());

            var transform = Matrix();

            transform = Matrix.multiply(transform,
                Matrix.translation(Vec2(- bbox.topLeft.x + 16, - bbox.topLeft.y + 16)));

            group.transform({ matrix: Matrix.toSVGString(transform) });


            bbox = Rect(group.bbox());

            this.element.style.width = (Rect.width(bbox) + 32) + 'px';
            this.element.style.height = (Rect.height(bbox) + 32) + 'px';
        },

        setSize: function setSize(size) {

            this.size = size;

        },

        getSize: function getSize() {

            return this.size;

        },

        getName: function getName() {

            return this.displayList.name || null;
        },
        
        setFont: function setFont(font) {

            this.font = font;

        },

        addObstacle: function addObstacle(element) {

            this.obstacles.push(element);

        },

        linkInteractions: function linkInteractions(group) {

            for(;;) {

                var arcs = [];

                this.displayList.interactions.forEach(function(interaction) {

                    function isDescendant(element, group) {

                        while(element) {

                            if(element === group)
                                return true;

                            element = element.parent;
                        }

                        return false;
                    }

                    if((!interaction.svg) &&
                       isDescendant(interaction.origin.svg, group) &&
                       isDescendant(interaction.target.svg, group)) {

                        var originCenter = Rect.center(Rect(interaction.origin.svg.bbox())),
                            targetCenter = Rect.center(Rect(interaction.target.svg.bbox()));

                        var direction = Vec2.direction(originCenter, targetCenter);

                        arcs.push({

                            interaction: interaction,

                            start: {
                                component: interaction.origin.svg,
                                direction: Vec2(-direction.y, -direction.x)
                            },

                            end: {
                                component: interaction.target.svg,
                                direction: Vec2(-direction.y, -direction.x)
                            },

                            style: {
                                'stroke': interaction.color || 'black',
                                'stroke-width': interaction.thickness || '2px',
                                'stroke-linejoin': 'round',
                                'cap': ({
                                    induction: 'arrow',
                                    repression: 'line'
                                })[interaction.type]
                            }

                        });

                    }

                });

                if(arcs.length === 0) 
                    break;

                var arcPaths = Linker.link(this.surface, this.obstacles, arcs, {

                    arcDistance: this.geom.arcDistance,
                    arcEndLength: this.geom.arcEndLength,
                    arcTurnLength: this.geom.arcTurnLength,
                    debugPathfinding: true

                });

                var arcGroup = this.surface.group();

                arcPaths.forEach(function(arcPath) {

                    var displayListArc = arcPath.arc.arc;

                    displayListArc.interaction.svg = arcPath.path;
                    arcPath.path.displayList = displayListArc.interaction;

                    arcGroup.add(arcPath.path);

                });

                group.add(arcGroup);
            }
        }

    };

    return Design;

});
