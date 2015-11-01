
var SVG = require('./svg'),
    Rect = require('./geom/rect'),
    Vec2 = require('./geom/vec2'),
    Matrix = require('./geom/matrix');

function renderEntity(design, entity) {

    var group = design.surface.group();

    var text = design.surface.text('');

    text.font({ anchor: 'middle', weight: 'bold' });

    text.build(true);

    var label = text.tspan(entity.name);

    label.attr('alignment-baseline', 'middle');

    text.build(false);

    group.add(text);

    group.displayList = entity;
    entity.svg = group;

    return group;
}


module.export = renderEntity;

