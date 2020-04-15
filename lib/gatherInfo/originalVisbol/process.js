
var Rect = require('./geom/rect'),
    Vec2 = require('./geom/vec2'),
    Matrix = require('./geom/matrix');

function renderProcess(design, process) {

    var group = design.surface.group();

    group.add(design.surface.rect(
        design.geom.processBoxSize.x,
        design.geom.processBoxSize.y));

    group.displayList = process;
    process.svg = group;

    return group;
}

module.exports = renderProcess;


