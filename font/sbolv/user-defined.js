
define([ 'visbol' ], function(visbol) {

    var Vec2 = visbol.Vec2,
        Rect = visbol.Rect,
        Matrix = visbol.Matrix;

    function renderGlyph(design, glyphObject, boxSize) {

        var glyph = design.surface.rect(boxSize.x, boxSize.y);

        glyph.attr('stroke', 'black');
        glyph.attr('fill', glyphObject.color || '#cee');

        var group = design.surface.group();

        group.add(glyph);

        var text = design.surface.text('');

        text.font({ anchor: 'middle', weight: 'bold' });

        text.build(true);

        var questionMark = text.tspan('?');

        questionMark.attr('alignment-baseline', 'middle');

        text.transform({ matrix:
            Matrix.toSVGString(
                Matrix.translation(Vec2(boxSize.x / 2.0, boxSize.y / 2.0)))
        });

        text.build(false);

        group.add(text);

        return {
            glyph: group,
            backboneOffset: boxSize.y / 2.0
        };
    }

    return {

        render: renderGlyph

    };
});


