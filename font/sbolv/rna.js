
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

         const smoothing = 0.2;
         var p = (previous === null) ? current : previous;
         var n = (next === null) ? current: next;

         var line = createTangentLine(n,p);

         return {
             x: current.x + (Math.cos(line.angle + Math.PI) * line.length * smoothing),
             y: current.y + (Math.sin(line.angle + Math.PI) * line.length * smoothing)
         };
    }
    // Coordinates of Points to Connect
    var x = boxSize.x;
    var y = boxSize.y;
    var stepSize = 3*x/14
    var pointA = Vec2(5*x/4, y);
    var pointB = Vec2(pointA.x - stepSize, 3*y/4);
    var pointC = Vec2(pointA.x - 2*stepSize, y );
    var pointD = Vec2(pointA.x - 3*stepSize, 3*y/4);
    var pointE = Vec2(pointA.x - 4*stepSize, y );
    var pointF = Vec2(pointA.x - 5*stepSize, 3*y/4);
    var pointG = Vec2(pointA.x - 6*stepSize, y );
    var pointH = Vec2(pointA.x - 7*stepSize, 3*y/4);


    //Coordinates of Control Points
    var controlPoint1 = createControlPoint(pointA, pointB, null);
    var controlPoint2 = createControlPoint(pointB, pointC, pointA);
    var controlPoint3 = createControlPoint(pointC, pointD, pointB );
    var controlPoint4 = createControlPoint(pointD, pointE, pointC);
    var controlPoint5 = createControlPoint(pointE, pointF, pointD);
    var controlPoint6 = createControlPoint(pointF, pointG, pointE);
    var controlPoint7 = createControlPoint(pointG, pointH, pointF);
    var controlPoint8 = createControlPoint(pointH, null, pointG);



    return {


       //coordinate of pick
        pointA:  pointA,
        pointB:  pointB,
        pointC:  pointC,
        pointD:  pointD,
        pointE:  pointE,
        pointF:  pointF,
        pointG:  pointG,
        pointH:  pointH,

      //coordiantes of control ponits
      controlPoint1: controlPoint1,
      controlPoint2: controlPoint2,
      controlPoint3: controlPoint3,
      controlPoint4: controlPoint4,
      controlPoint5: controlPoint5,
      controlPoint6: controlPoint6,
      controlPoint7: controlPoint7,
      controlPoint8: controlPoint8,



    };
    }
    function renderGlyph(design, glyphObject, boxSize) {
    var geom = createGeometry(boxSize);


    var path = [
        'M' + Vec2.toPathString(geom.pointA),
        'C' + Vec2.toPathString(geom.controlPoint1) + ' ' +  Vec2.toPathString(geom.controlPoint2) + ' ' + Vec2.toPathString(geom.pointB),
        'S' + Vec2.toPathString(geom.controlPoint3) + ' ' + Vec2.toPathString(geom.pointC),
        'S' + Vec2.toPathString(geom.controlPoint4) + ' ' + Vec2.toPathString(geom.pointD),
        'S' + Vec2.toPathString(geom.controlPoint5) + ' ' + Vec2.toPathString(geom.pointE),
        'S' + Vec2.toPathString(geom.controlPoint6) + ' ' + Vec2.toPathString(geom.pointF),
        'S' + Vec2.toPathString(geom.controlPoint7) + ' ' + Vec2.toPathString(geom.pointG),
        'S' + Vec2.toPathString(geom.controlPoint8) + ' ' + Vec2.toPathString(geom.pointH),

     ].join('');

    var glyph = design.surface.path(path);
    var group = design.surface.group()

    glyph.attr('stroke', glyphObject.color || '#000000');
    glyph.attr('stroke-width', glyphObject.thickness || '3px');
    glyph.attr('stroke-linecap', 'round');
   glyph.attr('fill', glyphObject.color || '#FFFFFF');


    group.add(glyph);

    boundingBox = design.surface.rect(boxSize.x, boxSize.y);
    boundingBox.attr('fill-opacity', 0);

    if(glyphObject.uri) {
        boundingBox.attr('data-uri', glyphObject.uri);
}
    group.add(boundingBox);

    return {
        glyph: group,
        backboneOffset: boxSize.y
    };
}

module.exports = {

    render: renderGlyph,


};
