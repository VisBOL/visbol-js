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
        this.toDisplay = null;
        this.updateDisplay();
    }

    getGlyphDictionary() {
        return this.glyphDictionary;
    }

    /**
     * This method creates the Display design (called on construction)
     */
    updateDisplay() {
        this.renderGlyphs();
        this.adjustDimensions();
        // create container
        const container = new Array(this.height);
        for (let i = 0; i < container.length; i++) {
            container[i] = new Array(this.width).fill(' ');
        }
        Object.values(this.glyphDictionary).forEach(glyph => {
            container[container.length - 1 - glyph.coords[1]][glyph.coords[0]] = glyph.getRendering()[0];
        })
        this.toDisplay = container;
    }

    /**
     * This method calculates the needed height and width of the display
     */
    adjustDimensions() {
        this.height = 0;
        this.width = 0;
        const glyphList = Object.values(this.glyphDictionary);
        glyphList.forEach(glyph => {
            const glyphX = glyph.coords[0] + glyph.svg.width;
            const glyphY = glyph.coords[1] + glyph.svg.height;
            if (glyphX > (this.width - this.padding)) {
                this.width = glyphX + this.padding;
            }
            if (glyphY > (this.height - this.padding)) {
                this.height = glyphY + this.padding;
            }
        });
    }

    /**
     * This method renders the glyphs within the display
     */
    renderGlyphs() {
        this.rootGlyphs.forEach(glyph => {
            this.glyphDictionary[glyph].placeSelfAndHooks();
        });
    }

    /**
     * This method returnns the rendered display
     */
    getDisplay() {
        return this.toDisplay;
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
}

module.exports = Display;