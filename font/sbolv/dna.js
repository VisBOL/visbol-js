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
    // Coordinates of Points to Connect
    var x = boxSize.x;
    var y = boxSize.y;
    var stepSize = x/2;

    // First spiral
    var pointa = Vec2(3 * x/2, 4.75 * y/5);
    var pointA = Vec2(5 * x/4, 3 * y/5 );
    var pointB = Vec2(pointA.x - stepSize, y);
    var pointC = Vec2(pointA.x - 2 * stepSize, 3 * y/5 );
    var pointD = Vec2(-x/4, 4.8 * y/5);
    var pointd = Vec2(-x/2,3 * y/5);

  //  Second spiral
    var pointf = Vec2(3 * x/2,3 * y/5);
    var pointF = Vec2(5 * x/4, 4.8 * y/5);
    var pointG = Vec2(pointF.x - stepSize, 3 * y/5);
    var pointH = Vec2(pointF.x - 2 * stepSize, y);
    var pointI = Vec2(-x/4, 3 * y/5);
    var pointi = Vec2(-x/2, 4.75 * y/5);

    var topLeft= Vec2(-1 * x-2, 2.9 * y/5);
    var bottomLeft= Vec2(-1 * x-2, 4.75 * y/5);
    var topRight= Vec2(-x/4, 2.9 * y/5);
    var bottomRight=Vec2(-x/4, 4.75 * y/5);

    var topLeft1= Vec2(5 * x/4, 2.9 * y/5);
    var bottomLeft1= Vec2(5 * x/4, 4.75 * y/5);
    var topRight1= Vec2(2 * x, 2.9 * y/5);
    var bottomRight1= Vec2(2 * x, 4.75 * y/5);


    //Coordinates of Control Points
    var controlPoint1 = createControlPoint(pointa, pointA, null);
    var controlPoint2 = createControlPoint(pointA, pointB, pointa);
    var controlPoint3 = createControlPoint(pointB, pointC, pointA );
    var controlPoint4 = createControlPoint(pointC, pointD, pointB);
    var controlPoint5 = createControlPoint(pointD, pointd,pointC);
    var controlPoint6 = createControlPoint(pointd, null,pointD);

    var controlPoint7 = createControlPoint(pointf, pointF, null);
    var controlPoint8 = createControlPoint(pointF, pointG, pointf);
    var controlPoint9 = createControlPoint(pointG, pointH, pointF);
    var controlPoint10 = createControlPoint(pointH,pointI,pointG);
    var controlPoint11 = createControlPoint(pointI,pointi,pointH);
    var controlPoint12 = createControlPoint(pointi,null,pointI);



    return {


       //coordinate of pick
        pointa:  pointa,
        pointA:  pointA,
        pointB:  pointB,
        pointC:  pointC,
        pointD:  pointD,
        pointd:  pointd,
      //  pointE:  pointE,
        pointf:  pointf,
        pointF:  pointF,
        pointG:  pointG,
        pointH:  pointH,
        pointI:  pointI,
        pointi:  pointi,

      //coordiantes of control ponits
      controlPoint1:  controlPoint1,
      controlPoint2:  controlPoint2,
      controlPoint3:  controlPoint3,
      controlPoint4:  controlPoint4,
      controlPoint5:  controlPoint5,
      controlPoint6:  controlPoint6,
      controlPoint7:  controlPoint7,
      controlPoint8:  controlPoint8,
      controlPoint9:  controlPoint9,
      controlPoint10: controlPoint10,
      controlPoint11: controlPoint11,
      controlPoint12: controlPoint12,

      topLeft: topLeft,
      bottomLeft:bottomLeft,
      bottomRight:bottomRight,
      topRight:topRight,

      topLeft1: topLeft1,
      bottomLeft1:bottomLeft1,
      bottomRight1:bottomRight1,
      topRight1:topRight1,




    };
    }
    function renderGlyph(design, glyphObject, boxSize) {
    var geom = createGeometry(boxSize);


    var path = [
        'M' + Vec2.toPathString(geom.pointa),
        'C' + Vec2.toPathString(geom.controlPoint1) + ' ' +  Vec2.toPathString(geom.controlPoint2) + ' ' + Vec2.toPathString(geom.pointA),
        'S' + Vec2.toPathString(geom.controlPoint3) + ' ' + Vec2.toPathString(geom.pointB),
        'S' + Vec2.toPathString(geom.controlPoint4) + ' ' + Vec2.toPathString(geom.pointC),
        'S' + Vec2.toPathString(geom.controlPoint5) + ' ' + Vec2.toPathString(geom.pointD),
        'S' + Vec2.toPathString(geom.controlPoint6) + ' ' + Vec2.toPathString(geom.pointd),


     ].join('');

     var path2 = [
      'M' + Vec2.toPathString(geom.pointf),
      'C' + Vec2.toPathString(geom.controlPoint7) + ' ' +  Vec2.toPathString(geom.controlPoint8) + ' ' + Vec2.toPathString(geom.pointF),
      'S' + Vec2.toPathString(geom.controlPoint9) + ' ' + Vec2.toPathString(geom.pointG),
      'S' + Vec2.toPathString(geom.controlPoint10) + ' ' + Vec2.toPathString(geom.pointH),
      'S' + Vec2.toPathString(geom.controlPoint11) + ' ' + Vec2.toPathString(geom.pointI),
      'S' + Vec2.toPathString(geom.controlPoint12) + ' ' + Vec2.toPathString(geom.pointi),



    ].join('');

    var path3 = [
      'M' + Vec2.toPathString(geom.topLeft),
      'L' + Vec2.toPathString(geom.bottomLeft),
      'L' + Vec2.toPathString(geom.bottomRight),
      'L' + Vec2.toPathString(geom.topRight),
      'Z'
    ].join('');

    var path4 = [
      'M' + Vec2.toPathString(geom.topLeft1),
      'L' + Vec2.toPathString(geom.bottomLeft1),
      'L' + Vec2.toPathString(geom.bottomRight1),
      'L' + Vec2.toPathString(geom.topRight1),
      'Z'
    ].join('');

    var glyph = design.surface.path(path);
    var glyph2 = design.surface.path(path2);
    var glyph3 = design.surface.path(path3);
    var glyph4 = design.surface.path(path4);
    var group = design.surface.group()

    glyph.attr('stroke', glyphObject.color || '#000000');
    glyph.attr('stroke-width', glyphObject.thickness || '3px');
    glyph.attr('stroke-linecap', 'round');
    glyph.attr('fill-opacity', 0);


    glyph2.attr('stroke', glyphObject.color || '#000000');
    glyph2.attr('stroke-width', glyphObject.thickness || '3px');
    glyph2.attr('stroke-linecap', 'round');
    glyph2.attr('fill-opacity', 0);

    glyph3.attr('stroke', glyphObject.color || '#FFFFFF');
    glyph3.attr('stroke-width', glyphObject.thickness || '3px');
    glyph3.attr('stroke-linejoin','round');
    glyph3.attr('stroke-linecap', 'round');
    glyph3.attr('fill', 'white');

    glyph4.attr('stroke', glyphObject.color || '#FFFFFF');
    glyph4.attr('stroke-width', glyphObject.thickness || '3px');
    glyph4.attr('stroke-linejoin','round');
    glyph4.attr('stroke-linecap', 'round');
    glyph4.attr('fill','white');



      group.add(glyph);
      group.add(glyph2);
      group.add(glyph3);
      group.add(glyph4);

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
