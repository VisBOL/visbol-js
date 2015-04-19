
define(['./svg',
        './segment',
        './entity',
        './geom/rect',
        './geom/vec2',
        './geom/matrix',
        './linker'
],
        
function(SVG, Segment, Entity, Rect, Vec2, Matrix, Linker) {

    function renderComponent(design, component) {

        var segments = component.segments.map(function(segment) {

            return Segment.render(design, segment);

        });

        var group = design.surface.group();

        segments.forEach(group.add.bind(group));

        var entities = component.entities.map(function(entityObject) {

            var entity = Entity.render(design, entityObject);

            entity.move(10, 10);
            
            return entity;
        });

        entities.forEach(group.add.bind(group));

        design.linkInteractions(group);

        var boundingBox = Rect.expand(
            Rect(group.bbox()), design.geom.componentBoxPadding);

        var box = design.surface.rect(
            Rect.width(boundingBox), Rect.height(boundingBox));

        box.transform({ matrix:
              Matrix.toSVGString(Matrix.translation(boundingBox.topLeft)) });

        box.radius(8);

        box.attr('stroke', component.color || 'black');
        box.attr('stroke-width', component.thickness || '2px');
        box.attr('stroke-linejoin', 'round');
        box.attr('fill', 'none');

        group.add(box);

        group.displayList = component;
        component.svg = group;

        return group;
    }

    return {

        render: renderComponent

    };

});
