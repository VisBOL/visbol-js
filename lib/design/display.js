const ReactDOM = require('react-dom');
const React = require('react');
const Rendering = require('../rendering/react/reactRender');

//const SVG = require('../gatherInfo/originalVisbol/svg');
/**
 * This class represents the Visbol rendered display. It allows to deletion and adding of glyphs
 */
class Display {
    constructor(glyphDictionary, rootGlyphs, padding) {
        this.glyphDictionary = glyphDictionary;
        this.rootGlyphs = rootGlyphs;
        this.padding = padding;
        this.height = 0;
        this.width = 0;
        this.largestInset = 0;
        this.toPlace = [];
    }

    /**
     * Return the glyph dictionary
     */
    getGlyphDictionary() {
        return this.glyphDictionary;
    }

    /**
     * This method configures the glyphs for rendering
     * @param {string} type
     */
    renderGlyphs(type=undefined) {
        this.rootGlyphs.forEach(glyphId => {
            this.glyphDictionary[glyphId].placeSelfAndHooks(this, type);
        });
    }

    /**
     * This method removes a glyph stored in the display by ID
     * @param {string} id 
     */
    deleteGlyph(id) {
        glyphDictionary[id].hookedTo.glyph.unhook(hookedTo.direction);
        delete this.glyphDictionary[id];
    }

    /**
     * This method adds a glyph to the display if it doesn't already exist in the display
     * @param {string} id 
     * @param {Object} glyph 
     */
    addGlyph(id, glyph) {
        if(!this.glyphDictionary[id]) {
            this.glyphDictionary[id] = glyph;
        }
        //would need to hook glyph to appropriate glyphs
    }

    renderReact() {
        this.renderGlyphs('react');
        this.height += this.largestInset;
        console.log('rendering react version');
        const container = document.getElementById('design');
        ReactDOM.render(<Rendering display={this} />, container);
    }
}

module.exports = Display;