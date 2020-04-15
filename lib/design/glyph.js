const Hook = require('./hook');
const mapToSVG = require('../svg/glyphs/mapGlyphToSVG');
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
        this.svg = mapToSVG(this.name);
        this.coords = [0, 0];
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
     * This method gets the rendered glyph
     */
    getRendering() {
        return this.svg.getRendering();
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
    unhook(direction) {
        this.hooks[direction] = null;
    }

    /**
     * This function returns a list of available hooks on the glyph
     */
    availableHooks() {
        const availableHooks = Object.keys(this.hooks).map(direction =>  {
            if (!this.hooks[direction]) {
                return direction;
            }
        });
        return availableHooks;
    }

    /**
     * This is a recursive method that places all hooks and destination glyphs in the appropriate spot
     */
    placeSelfAndHooks() {
        Object.keys(this.hooks).forEach(direction => {
            if (this.hooks[direction]) {
                this.hooks[direction].placeHook();
                this.hooks[direction].getDestinationGlyph().placeSelfAndHooks();
            }
        })
    }

}

module.exports = Glyph;