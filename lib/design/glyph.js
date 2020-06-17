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
        this.glyphIndex = 0;
        this.coords = [0, 0];
        this.dimensions = [1, 1];
        this.rendering = undefined;
        this.hooks = {
            north: null,
            south: null,
            east: null,
            west: null
        }
        this.hookedTo = glyphInfo.hookedTo;
    }

    /**
     * This method constructs and returns a tooltip. This tooltip is displayed when 
     * users hover over a glyph
     */
    getTooltip() {
        return this.tooltip;
    }

    /**
     * This method sets the rendering of the glyph (currently svg)
     * @param {Object} svg - the SVG to represent the glyph
     */
    setSVG(svg) {
        this.svg = svg;
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
     * This method gets rid of the hook in the given direction
     * @param {string} direction 
     */
    removeHook(direction) {
        this.hooks[direction] = null;
    }

    /**
     * This function returns a list of available hooks on the glyph
     */
    availableHooks() {
        const availableHooks = [];
        Object.keys(this.hooks).map(direction =>  {
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
        Object.keys(this.hooks).map(direction =>  {
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
    placeSelfAndHooks(display, type) {
        if (type === 'react') {
            var glyph = GlyphSelector[this.type];
            if (!glyph) {
                console.log(this.type);
                glyph = GlyphSelector['unknown'];
            }
            this.dimensions = glyph.dimensions;
            this.defaultString = glyph.defaultString;
            this.lower = glyph.lower;
            this.inset = glyph.inset;
            this.calibrateDisplay(display, this.inset);
            Object.keys(this.hooks).forEach(direction => {
                if (this.hooks[direction]) {
                    const hook = this.hooks[direction];
                    hook.lower = this.lower + this.inset;
                    hook.placeHook(display, type);
                    if (hook.destinationGlyph) {
                        hook.destinationGlyph.placeSelfAndHooks(display, type);
                    }
                }
            });
            display.toPlace.push(this);
        }
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