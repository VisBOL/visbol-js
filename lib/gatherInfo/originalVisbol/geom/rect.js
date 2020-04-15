
var Vec2 = require('./vec2');

function Rect(topLeft, bottomRight)
{
    if(arguments.length === 0) {
        return {
            topLeft: Vec2(),
            bottomRight: Vec2()
        };
    }

    /* getBoundingClientRect format? 
     */
    if(topLeft.left !== undefined) {
        return Rect.normalise({
            topLeft: Vec2(
                topLeft.left,
                topLeft.top
            ),
            bottomRight: Vec2(
                topLeft.right,
                topLeft.bottom
            )
        });
    }


    /* SVG getBBox format?
     */
    if(topLeft.width !== undefined) {
        return Rect.normalise({
            topLeft: Vec2(
                topLeft.x,
                topLeft.y
            ),
            bottomRight: Vec2(
                topLeft.x + topLeft.width,
                topLeft.y + topLeft.height
            )
        });
    }

    return Rect.normalise({
        topLeft: Vec2(topLeft.x, topLeft.y),
        bottomRight: Vec2(bottomRight.x, bottomRight.y)
    });
}

Rect.width = function width(rect) {
    return rect.bottomRight.x - rect.topLeft.x;
};

Rect.height = function height(rect) {
    return rect.bottomRight.y - rect.topLeft.y;
};

Rect.size = function size(rect) {
    return Vec2.abs(Vec2.subtract(rect.bottomRight, rect.topLeft));
}

Rect.clone = function clone(rect) {
    return Rect(rect.topLeft, rect.bottomRight);
};

Rect.area = function area(rect) {
    return Rect.width(rect) * Rect.height(rect);
};

Rect.expand = function contract(rect, amount) {

    return Rect(Vec2.subtract(rect.topLeft, amount),
                Vec2.add(rect.bottomRight, amount));

};

Rect.contract = function contract(rect, amount) {

    return Rect(Vec2.add(rect.topLeft, amount),
                Vec2.subtract(rect.bottomRight, amount));

};

Rect.move = function move(rect, delta) {

    return Rect(Vec2.add(rect.topLeft, delta),
                Vec2.add(rect.bottomRight, delta));

}

Rect.center = function center(rect) {

    return Vec2.add(rect.topLeft, Vec2.multiply(Rect.size(rect), 0.5));

}

Rect.intersects = function intersects(rectA, rectB) {

    return rectB.bottomRight.y > rectA.topLeft.y &&
             rectB.topLeft.y < rectA.bottomRight.y &&
             rectB.bottomRight.x > rectA.topLeft.x &&
             rectB.topLeft.x < rectA.bottomRight.x;
}

Rect.intersectsPoint = function intersectsPoint(rect, point) {
    
    return point.x > rect.topLeft.x &&
            point.x < rect.bottomRight.x &&
            point.y > rect.topLeft.y &&
            point.y < rect.bottomRight.y;

}

Rect.contains = function contains(rectA, rectB) {

    return rectB.topLeft.x >= rectA.topLeft.x &&
           rectB.topLeft.y >= rectA.topLeft.y &&
           rectB.bottomRight.x <= rectA.bottomRight.x &&
           rectB.bottomRight.y <= rectA.bottomRight.y;
}

Rect.inset = function insectRect(rect, insets) {

    var size = Rect.size(rect);

    return Rect(
        Vec2(rect.topLeft.x + size.x * insets.left, rect.topLeft.y + size.y * insets.top),
        Vec2(rect.bottomRight.x - size.x * insets.right, rect.bottomRight.y - size.y * insets.bottom)
    );

}

Rect.normalise = function normaliseRect(rect) {

    var size = Rect.size(rect);

    var topLeft = Vec2.min(rect.topLeft, rect.bottomRight);
    var bottomRight = Vec2.add(topLeft, size);

    return {
        topLeft: topLeft,
        bottomRight: bottomRight
    };
}

module.exports = Rect;






