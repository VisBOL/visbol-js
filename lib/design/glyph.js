const Hook = require('./hook');
const GlyphSelector = require('../rendering/react/GlyphSelector');
/**
 * This class represents a glyph in a Visbol design
 */
class Glyph {

    /**
     * Below is the constructor for a glyph object.
     * @param {Object} glyphInfo - Instead of passing in separate parameters, I opted to pass
     * in a single glyph object referred to as glyphInfo. This is because I anticipate in some/many cases,
     * not all of the information will be present after parsing an SBOL file
     */
    constructor(glyphInfo) {
        this.name = glyphInfo.name;
        this.id = glyphInfo.id;
        this.uri = glyphInfo.uri;
        this.type = glyphInfo.type;
        this.strand = glyphInfo.strand;
        this.tooltip = glyphInfo.tooltip;
        this.hookedTo = glyphInfo.hookedTo;
        this.glyphIndex = 0;
        this.coords = [0, 0];
        this.rendering = undefined;
        this.hooks = {
            north: null,
            south: null,
            east: null,
            west: null
        }
        var glyph = GlyphSelector[this.type];
        if (!glyph) {
            glyph = GlyphSelector['no-glyph-assigned'];
        }
        this.dimensions = glyph.dimensions;
        this.defaultString = glyph.defaultString;
        this.inset = glyph.inset;
    }

    connect(tip, direction) {
        // direction = direction the hook is facing.
        // for example, north would mean that the hook is connecting to the glyph's
        // southern link
        switch (direction) {
            case 'north': {
                this.coords = [tip.x - this.dimensions[0] / 2, tip.y + this.dimensions[1] / 2];
                break;
            }
            default: {
                this.coords = [tip.x, tip.y];
                break;
            }
        }
    }

    getLink(direction) {
        switch (direction) {
            case 'north': {
                return { x: this.coords[0] + this.dimensions[0] / 2, y: this.coords[1] + this.dimensions[1] - this.inset };
            }
            default: {
                return { x: this.coords[0] + this.dimensions[0], y: this.coords[1] };
            }
        }
    }

    /**
     * Sets the glyph's coords
     * @param {Object} coords - the SVG coords (where the glyph should be located)
     */
    setCoords(coords) {
        this.coords = coords;
    }

    /**
     * This function hooks a glyph to another glyph
     * @param {Glyph} otherGlyph 
     * @param {string} direction 
     * @param {Hook} hook 
     */
    hookTo(otherGlyph, direction, type) {
        this.hooks[direction] = new Hook(this, otherGlyph, direction, type);
    }

    /**
     * This function returns a list of available hooks on the glyph
     */
    availableHooks() {
        const availableHooks = [];
        Object.keys(this.hooks).map(direction => {
            if (!this.hooks[direction]) {
                availableHooks.push(direction);
            }
        });
        return availableHooks;
    }

    /**
     * Returns a list of the hooks that have already been attached to the glyph
     */
    takenHooks() {
        const takenHooks = [];
        Object.keys(this.hooks).map(direction => {
            if (this.hooks[direction]) {
                takenHooks.push(direction);
            }
        });
        return takenHooks;
    }

    /**
     * This is a recursive method that places all hooks and destination glyphs in the appropriate spot
     * @param {Display} display - the display that the glyph is in
     */
    placeSelfAndHooks(display) {
        this.calibrateDisplay(display, this.inset);
        this.takenHooks().forEach(direction => {
            if (this.hooks[direction]) {
                const hook = this.hooks[direction];
                if (direction === 'north') {
                    hook.lower = this.inset;
                }
                hook.placeHook(display);
                if (hook.destinationGlyph) {
                    hook.destinationGlyph.placeSelfAndHooks(display);
                }
            }
        });
        display.toPlace.push(this);
    }

    calibrateDisplay(display, inset) {
        var farthestX = this.coords[0] + this.dimensions[0];
        if (farthestX > display.width) {
            display.width = farthestX;
        }
        var farthestY = this.coords[1] + this.dimensions[1];
        if (farthestY > display.height) {
            display.height = farthestY;
        }
        if (inset) {
            if (inset > display.largestInset) {
                display.largestInset = inset;
            }
        }
    }

    /**
     * 
     * @param {int} lowerBound - the lower bound glyph index (inclusive)
     * @param {int} upperBound - the upper bound glyph index (exclusive)
     */
    withinBounds(lowerBound, upperBound) {
        return this.glyphIndex >= lowerBound && this.glyphIndex < upperBound;
    }

}

module.exports = Glyph;