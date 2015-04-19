
define([ './svg',
         './geom/rect',
         './geom/vec2',
         './geom/matrix'
], 

function(SVG, Rect, Vec2, Matrix) {

    function renderSegment(design, segment) {

        var surface = design.surface;

        var glyphOffset = 0;

        var glyphs = segment.sequence.map(function(glyphObject) {

            var glyph = design.font[glyphObject.type]

            var boundingBoxSize = design.geom.glyphSize;  /* var width goes here */

            if(glyph === undefined)
                glyph = design.font['user-defined'];

            var glyphProps = glyph.render(design, glyphObject, boundingBoxSize);

            var glyph = glyphProps.glyph;
            var backboneOffset = glyphProps.backboneOffset;

            var glyphMatrix = Matrix();
            var labelMatrix = Matrix();

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

                var label = labelText.tspan(glyphObject.name);

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


            glyphOffset += boundingBoxSize.x;
            glyphOffset += design.geom.glyphPadding;

            var group = surface.group().add(glyph);
            
            if(labelText !== undefined)
                group.add(labelText);

            glyph.displayList = glyphObject;
            glyphObject.svg = group;

            glyphObject.arcEdge =
                glyphObject.strand === 'negative' ?
                    'bottom' : 'top';

            return group;
        });


        var backbone = surface.line(0,
                                    0,
                                    glyphOffset,
                                    0);

        backbone.attr('stroke', segment.color || 'black');
        backbone.attr('stroke-width', segment.thickness || '2px');

        var group = surface.group();

        glyphs.forEach(group.add.bind(group));
        glyphs.forEach(design.addObstacle.bind(design));

        group.add(backbone);
        backbone.back();

        group.displayList = segment;
        segment.svg = group;

        return group;
    }

    return {

        render: renderSegment

    };
});


