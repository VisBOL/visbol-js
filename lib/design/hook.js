const HookSelector = require('../rendering/react/HookSelector');
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
        this.length = 0;
        this.rendering = undefined;
        this.name = 'hook';
        if (this.destinationGlyph) {
            this.destinationGlyph.hookedTo = {
                startGlyph,
                direction,
            }
        }
        this.rotation = this.getRotation();
    }

    /**
     * This places the hook in the appropriate position
     */
    placeHook(display, type) {
        if (type === 'react') {
            this.length = require('../rendering/react/config').hook_length;
            if (!(this.type === 'link' || this.type === 'degradation')) {
                const hook = HookSelector['inhibition'];
                this.defaultString = hook.defaultString;
                display.toPlace.push(this);
            }
            else {
                this.length = 0;
            }
        }
        if (this.destinationGlyph) {
            this.destinationGlyph.setCoords(this.calculateDestinationCoords(this.length)); //hook dimensions
            this.setDestinationGlyphIndex();
        }
    }

    /**
     * Returns the glyph the hook travels to
     */
    getDestinationGlyph() {
        return this.destinationGlyph;
    }

    /**
     * Returns the amount of degrees the hook should be rotated
     */
    getRotation() {
        switch(this.direction) {
            case 'north': {
                return 0;
            }
            case 'east': {
                return 90;
            }
            case 'south': {
                return 270;
            }
            case 'west': {
                return 180;
            }
        }
    }

    /**
     * Sets the index of destination glyph in the display
     */
    setDestinationGlyphIndex() {
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
    calculateDestinationCoords(length) {
        switch(this.direction) {
            case 'east': {
                return [this.startGlyph.coords[0] + this.startGlyph.dimensions[0] + length, this.startGlyph.coords[1]];
            }
            case 'north': {
                return [this.startGlyph.coords[0], this.startGlyph.coords[1] + this.startGlyph.dimensions[1] + length];
            }
            case 'south': {
                return [this.startGlyph.coords[0], this.startGlyph.coords[1] - length];
            }
            case 'west': {
                return [this.startGlyph.coords[0] - length, this.startGlyph.coords[1]];
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