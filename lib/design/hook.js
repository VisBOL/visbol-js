const HookSelector = require('../rendering/react/HookSelector');
/**
 * This class represents a hook, which represents any arrows or chainlink in the Visbol rendering
 */
class Hook {
    /**
     * Below is a constructor for a Hook object
     * @param {Glyph} startGlyph - the glyph where the start of the hook is attached
     * @param {Glyph} destinationGlyph  - the glyph where the end of the hook is attached
     * @param {String} direction - the direction the hook will be facing
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
        this.start = {
            x: 0,
            y: 0
        }
        this.tip = {
            x: 0,
            y: 0
        }
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
    placeHook(display) {
        if (!(this.type === 'link' || this.type === 'degradation')) {
            const hook = HookSelector['genetic-production'];
            this.defaultString = hook.defaultString;
            this.length = hook.length;
            //display.toPlace.push(this);
        }
        else {
            this.length = 0;
        }
        if (this.destinationGlyph) {
            this.start = this.startGlyph.getLink(this.direction);
            this.tip = this.getTip();
            this.destinationGlyph.connect(this.tip, this.direction);
            this.setDestinationGlyphIndex();
            //console.log(`hook facing ${this.direction}, going from ${this.startGlyph.name} to ${this.destinationGlyph.name}. Tip coords: (start_x: ${this.start.x}, start_y: ${this.start.y}), (tip_x: ${this.tip.x}, tip_y: ${this.tip.y})`);
        }
    }

    getTip() {
        switch (this.direction) {
            case 'link': {
                return this.start;
            }
            case 'north': {
                return { x: this.start.x, y: this.start.y + this.length };
            }
            default: {
                return { x: this.start.x + this.length, y: this.start.y };
            }
        }
    }

    /**
     * Returns the amount of degrees the hook should be rotated
     */
    getRotation() {
        switch (this.direction) {
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
        switch (this.direction) {
            case 'east': {
                this.destinationGlyph.glyphIndex = this.startGlyph.glyphIndex + 1;
                break;
            }
            case 'west': {
                this.destinationGlyph.glyphIndex = this.startGlyph.glyphIndex - 1;
                break;
            }
            case 'north':
            case 'south': {
                this.destinationGlyph.glyphIndex = this.startGlyph.glyphIndex;
                break;
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