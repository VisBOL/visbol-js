const HookSelector = require('../rendering/react/hookSVG/HookSelector');

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
        this.type = type;
        this.coords = [0, 0];
        this.dimensions = [1, 1];
        this.destinationGlyph.hookedTo = {
            startGlyph,
            direction,
        }
    }

    /**
     * This places the hook in the appropriate position
     */
    placeHook(type) {
        if (type === 'react') {
            this.dimensions = HookSelector[this.type].dimensions;
        }
        this.coords = this.startGlyph.coords;
        this.coords = this.calculateNewCoords(this.startGlyph.dimensions); //start glyph dimensions
        this.destinationGlyph.setCoords(this.calculateNewCoords(this.dimensions)); //hook dimensions
        this.setHookAndDestinationGlyphIndex();
    }

    /**
     * Returns the glyph the hook travels to
     */
    getDestinationGlyph() {
        return this.destinationGlyph;
    }

    /**
     * Sets the index of destination glyph in the display
     */
    setHookAndDestinationGlyphIndex() {
        switch(this.direction) {
            case 'east': {
                this.destinationGlyph.glyphIndex = this.startGlyph.glyphIndex + 1;
                break;
            }
            case 'north':
            case 'south': {
                this.destinationGlyph.glyphIndex = this.startGlyph.glyphIndex;
                break;
            }
            case 'west': {
                this.destinationGlyph.glyphIndex = this.startGlyph.glyphIndex - 1;
                break;
            }
        }
    }

    /**
     * Calculates new coords based on the width and height of the glyph
     * @param {int} width 
     * @param {int} height 
     */
    calculateNewCoords(dimensions) {
        switch(this.direction) {
            case 'east': {
                return [this.coords[0] + dimensions[0], this.coords[1]];
            }
            case 'north': {
                return [this.coords[0], this.coords[1] + dimensions[1]];
            }
            case 'south': {
                return [this.coords[0], this.coords[1] - dimensions[1]];
            }
            case 'west': {
                return [this.coords[0] - dimensions[0], this.coords[1]];
            }
        }
    }

    /**
     * Determines if hook's destination is within the bounds
     * @param {int} lowerBound - the lower bound of the interval (inclusive)
     * @param {int} upperBound - the upper bound of the interval (exclusive)
     */
    withinBounds(lowerBound, upperBound) {
        return this.startGlyph.withinBounds(lowerBound, upperBound) && 
        this.destinationGlyph.withinBounds(lowerBound, upperBound);
    }
}

module.exports = Hook;