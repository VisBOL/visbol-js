
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function createGeometry(boxSize) {

    function createTangentLine(pointA, pointB) {

      var lengthX = pointB.x - pointA.x;
      var lengthY = pointB.y - pointA.y;

      return {
          length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
          angle: Math.atan2(lengthY, lengthX)
      };

    }

    function createControlPoint(current, previous, next) {

         const smoothing = 0.25;
         var p = (previous === null) ? current : previous;
         var n = (next === null) ? current: next;

         var line = createTangentLine(n,p);

         return {
             x: current.x + (Math.cos(line.angle + Math.PI) * line.length * smoothing),
             y: current.y + (Math.sin(line.angle + Math.PI) * line.length * smoothing)
         };
    }

    var bodyCurveProportion = 0.7;
    var heightDecrease = 0.4;

    var topLeft = Vec2(0.0, boxSize.y * 0.8);
    var bottomLeft = Vec2(0.0, boxSize.y);
    var bottomRight = Vec2(boxSize.x, boxSize.y);
    var topRight = Vec2(boxSize.x, boxSize.y * bodyCurveProportion);

    //coordinate of pick
    var rightMostPick = Vec2(boxSize.x * 0.88, boxSize.y * heightDecrease);
    var right = Vec2(boxSize.x * 0.7, boxSize.y * bodyCurveProportion);
    var middlePick = Vec2(boxSize.x * 0.5, boxSize.y * heightDecrease);
    var middle = Vec2(boxSize.x * 0.3, boxSize.y * bodyCurveProportion);
    var leftMostPick = Vec2(boxSize.x * 0.1, boxSize.y * heightDecrease);

    //coordiantes of control ponits
    var controlPoint1 = createControlPoint(topRight, rightMostPick, null);
    var controlPoint2 = createControlPoint(rightMostPick, right, topRight);
    var controlPoint3 = createControlPoint(right, middlePick, rightMostPick);
    var controlPoint4 = createControlPoint(middlePick, middle, right);
    var controlPoint5 = createControlPoint(middle, leftMostPick, middlePick);
    var controlPoint6 = createControlPoint(leftMostPick, topLeft, middle);
    var controlPoint7 = createControlPoint(topLeft, null, leftMostPick);

    return {
       topLeft: topLeft,
       bottomLeft: bottomLeft,
       bottomRight: bottomRight,
       topRight: topRight,

       //coordinate of pick
       rightMostPick: rightMostPick,
       right: right,
       middlePick: middlePick,
       middle: middle,
       leftMostPick: leftMostPick,

      //coordiantes of control ponits
      controlPoint1: controlPoint1,
      controlPoint2: controlPoint2,
      controlPoint3: controlPoint3,
      controlPoint4: controlPoint4,
      controlPoint5: controlPoint5,
      controlPoint6: controlPoint6,
      controlPoint7: controlPoint7


  };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);


    var path = [

        'M' + Vec2.toPathString(geom.topLeft),
        'L' + Vec2.toPathString(geom.bottomLeft),
        'L' + Vec2.toPathString(geom.bottomRight),
        'L' + Vec2.toPathString(geom.topRight),
        'C' + Vec2.toPathString(geom.controlPoint1) + ' ' +  Vec2.toPathString(geom.controlPoint2) + ' ' + Vec2.toPathString(geom.rightMostPick),
        'S' + Vec2.toPathString(geom.controlPoint3) + ' ' + Vec2.toPathString(geom.right),
        'S' + Vec2.toPathString(geom.controlPoint4) + ' ' + Vec2.toPathString(geom.middlePick),
        'S' + Vec2.toPathString(geom.controlPoint5) + ' ' + Vec2.toPathString(geom.middle),
        'S' + Vec2.toPathString(geom.controlPoint6) + ' ' + Vec2.toPathString(geom.leftMostPick),
        'S' + Vec2.toPathString(geom.controlPoint7) + ' ' + Vec2.toPathString(geom.topLeft)

     ].join('');

    var glyph = design.surface.path(path);
    var group = design.surface.group()

    glyph.attr('stroke', glyphObject.color || '#000000');
    glyph.attr('stroke-width', glyphObject.thickness || '3px');
    glyph.attr('stroke-linecap', 'round');
    glyph.attr('fill', glyphObject.color || '#A9A9A9');


    group.add(glyph);

    boundingBox = design.surface.rect(boxSize.x, boxSize.y);
    boundingBox.attr('fill-opacity', 0);

    if(glyphObject.uri)
        boundingBox.attr('data-uri', glyphObject.uri);

    group.add(boundingBox);

    return {
        glyph: group,
        backboneOffset: boxSize.y
    };
}

module.exports = {

    render: renderGlyph,

    insets: {
        top: 0.48
    }

};
