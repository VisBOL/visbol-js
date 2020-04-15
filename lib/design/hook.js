const mapToSVG = require('../svg/hooks/mapHookToSvg');

/**
 * This class represents a hook, which represents any arrows or chainlink in the Visbol rendering
 */
class Hook {
    /**
     * Below is a constructor for a Hook object
     * @param {Glyph} startGlyph - the glyph where the start of the hook is attached
     * @param {Glyph} destinationGlyph  - the glyph where the end of the hook is attached
     * @param {Object} type - the hook type
     */
    constructor(startGlyph, destinationGlyph, direction, type) {
        this.startGlyph = startGlyph;
        this.destinationGlyph = destinationGlyph;
        this.direction = direction;
        this.type = type
        this.svg = mapToSVG(this.type);
        this.coords = [0, 0];
        this.destinationGlyph.hookedTo = {
            startGlyph,
            direction,
        }
    }

    /**
     * This places the hook in the appropriate position
     */
    placeHook() {
        this.svg.rotate(this.direction);
        this.coords = this.startGlyph.coords;
        this.coords = this.calculateNewCoords(this.startGlyph.svg.width, this.startGlyph.svg.height);
        this.destinationGlyph.setCoords(this.calculateNewCoords(this.svg.width, this.svg.height));
    }

    /**
     * Returns the glyph the hook travels to
     */
    getDestinationGlyph() {
        return this.destinationGlyph;
    }

    calculateNewCoords(width, height) {
        switch(this.direction) {
            case 'east': {
                return [this.coords[0] + width, this.coords[1]];
            }
            case 'north': {
                return [this.coords[0], this.coords[1] + height];
            }
            case 'south': {
                return [this.coords[0], this.coords[1] - height];
            }
            case 'west': {
                return [this.coords[0] - width, this.coords[1]];
            }
        }
    }
}

module.exports = Hook;