
var Rect = require('./geom/rect'),
    Vec2 = require('./geom/vec2'),
    Matrix = require('./geom/matrix'),
    Composite = require('../font/sbolv/composite'),
    nonDNATypes = require('./nonDNATypes');

function renderSegment(design, segment) {
         
    var surface = design.surface;

    var glyphOffset = 0;

    var boundingBoxSize;

    //This flag is set to true if the nonDNA part is going to be displayed in a sequense of length 1
    var isNonDNA = false;

    var glyphs = segment.sequence.map(function(glyphObject) {
     
        var glyph = design.font[glyphObject.type]

        /*
        * we set isNonDNA to true only if the sequence has length equal to 1
        * we need to do that since we don't want nonDNA parts to be displayed on the backbone
        */
        for (let key in nonDNATypes) {
           if ( nonDNATypes[key] === glyphObject.type && segment.sequence.length === 1) {
             isNonDNA = true;
             break;
           } 
        }

        var glyphLength;

        if(design.proportional &&
                glyphObject.start !== glyphObject.end) {

            glyphLength = (glyphObject.end - glyphObject.start) * design.scale;

        } else {

            glyphLength = design.geom.defaultGlyphSize.x;

        }

        glyphLength = Math.max(glyphLength, design.geom.defaultGlyphSize.x);

        boundingBoxSize = Vec2(glyphLength, design.geom.defaultGlyphSize.y);

        if(glyph === undefined)
            glyph = design.font['unspecified'];

        var glyphInsets = {
            left: glyph.insets && glyph.insets.left ?
                glyph.insets.left * boundingBoxSize.x : 0,

            top: glyph.insets && glyph.insets.top ?
                glyph.insets.top * boundingBoxSize.y : 0,

            right: glyph.insets && glyph.insets.right ?
                glyph.insets.right * boundingBoxSize.x : 0,

            bottom: glyph.insets && glyph.insets.bottom ?
                glyph.insets.bottom * boundingBoxSize.y : 0
        };

        boundingBoxSize.x -= glyphInsets.left + glyphInsets.right;
        boundingBoxSize.y -= glyphInsets.top + glyphInsets.bottom;

        glyphOffset.x += glyphInsets.left;
        glyphOffset.y += glyphInsets.top;

        var glyphProps = glyph.render(design, glyphObject, boundingBoxSize);

        var glyph = glyphProps.glyph;
         
        var backboneOffset = glyphProps.backboneOffset;

        var glyphMatrix = Matrix();
        var labelMatrix = Matrix();
         
        //if glyph object is composite, build the composite object 
        if (glyphObject.isComposite) { 
           var compositeProps = Composite.render(design, glyphObject, boundingBoxSize );
           var compositeGlyph = compositeProps.glyph;
           var compositeBackboneOffset = compositeProps.backboneOffset;
           var compositeMatrix = Matrix();
           compositeMatrix = Matrix.translate(compositeMatrix, Vec2(0, -backboneOffset));
           compositeMatrix = Matrix.translate(compositeMatrix, Vec2(glyphOffset, 0));

           if(glyphObject.strand === 'negative') {
            
            compositeMatrix = Matrix.translate(compositeMatrix, Vec2(0, backboneOffset));
            compositeMatrix = Matrix.rotate(compositeMatrix, 180, Vec2(boundingBoxSize.x, 0));
            compositeMatrix = Matrix.translate(compositeMatrix, Vec2(boundingBoxSize.x, 0));
            compositeMatrix = Matrix.translate(compositeMatrix, Vec2(0, -backboneOffset));
           }
           compositeGlyph.transform({ matrix: Matrix.toSVGString(compositeMatrix) });
        }

        glyphMatrix = Matrix.translate(glyphMatrix, Vec2(0, -backboneOffset));

        glyphMatrix = Matrix.translate(glyphMatrix, Vec2(glyphOffset, 0));

         
        if(glyphObject.strand === 'negative') {

            glyphMatrix = Matrix.translate(glyphMatrix, Vec2(0, backboneOffset));
            glyphMatrix = Matrix.rotate(glyphMatrix, 180, Vec2(boundingBoxSize.x, 0));
            glyphMatrix = Matrix.translate(glyphMatrix, Vec2(boundingBoxSize.x, 0));
            glyphMatrix = Matrix.translate(glyphMatrix, Vec2(0, -backboneOffset));
        }

        glyph.transform({ matrix: Matrix.toSVGString(glyphMatrix) });

        var glyphBBox = Rect(glyph.bbox());

        var labelText;
        if(glyphObject.name !== undefined) {

            labelText = design.surface.text('');

            labelText.font({ anchor: 'middle' });

            labelText.build(true);

            var label;
            label = labelText.tspan(glyphObject.name);

            if (glyphObject.labelColor ) {
               
              label.attr('fill', glyphObject.labelColor );
            }
             
            label.attr('alignment-baseline', 'middle');
             
            labelText.build(false);

            var labelPos = Vec2(
                glyphOffset + glyphBBox.topLeft.x + Rect.width(glyphBBox) / 2.0,

                glyphObject.strand === 'negative' ?
                    backboneOffset + design.geom.labelOffset :
                    0 - backboneOffset - design.geom.labelOffset);

            labelMatrix = Matrix.translate(labelMatrix, labelPos);

            labelText.transform({ matrix: Matrix.toSVGString(labelMatrix) });
        }

        if(glyphObject.tooltip) {
  
            glyph.attr('data-toggle', 'tooltip')
            glyph.attr('data-placement', 'top')
            glyph.attr('title', glyphObject.tooltip)
        }

        glyphOffset += boundingBoxSize.x;
        glyphOffset += design.geom.glyphPadding;

        var group = surface.group().add(glyph);
        
        //if glyph object is composite, Add composite glyph to the object 
        if (glyphObject.isComposite) { 
           group.add(compositeGlyph);
        }
       
        if(labelText !== undefined)
            group.add(labelText);

        glyph.displayList = glyphObject;
        glyphObject.svg = group;

        glyphObject.arcEdge =
            glyphObject.strand === 'negative' ?
                'bottom' : 'top';

        return group;
    });

    var group = surface.group();
    glyphs.forEach(group.add.bind(group));
    glyphs.forEach(design.addObstacle.bind(design));

    //Add backbone only if the glyph is non-DNA and its in sequence of length 1
    if (!isNonDNA){
       if(segment.topologies.includes("circular")) {
         
           var backbone = surface.rect(design.geom.segmentPadding + glyphOffset, 3 * boundingBoxSize.y)

           backbone.attr('fill', 'none');
           backbone.radius(10);

           backbone.transform({
               matrix: Matrix.toSVGString
                   (Matrix.translation(Vec2(-design.geom.segmentPadding, 0))) });
       } else {
           var backbone = surface.line(-design.geom.segmentPadding,
                                    0,
                                    glyphOffset,
                                    0);
    }

      backbone.attr('stroke', segment.color || 'black');
      backbone.attr('stroke-width', segment.thickness || '2px');
  

    group.add(backbone);
    backbone.back();
    }

    if(segment.name !== undefined) {

        var labelText = design.surface.text('');
        labelText.font({ anchor: 'left' });
        labelText.build(true);

        var label = labelText.tspan(segment.name);

         if (segment.labelColor) {
            label.attr('fill', segment.labelColor );
         }

        label.attr('alignment-baseline', 'middle');
        labelText.build(false);

        labelText.transform({
            matrix: Matrix.toSVGString
                (Matrix.translation(Vec2(-100, -100))) });

        group.add(labelText);
    }

    group.displayList = segment;
    segment.svg = group;

    return group;
}

module.exports = {
    render: renderSegment
}


