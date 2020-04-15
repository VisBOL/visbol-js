const renderSettings = require('../config/renderSettings');

class SVG {
    constructor(rendering, direction = 'east') {
        this.rendering = rendering;
        this.direction = direction;
        this.width;
        this.height;
        this.setDimensions();
    }

    getRendering() {
        return this.rendering;
    }

    rotate(direction) {
        this.direction = direction;
        this.setDimensions();
    }

    setDimensions() {
        this.height = this.calculateHeight()
        this.width = this.calculateWidth();
    }

    calculateHeight() {
        if (this.direction == 'north' || this.direction == 'south') {
            return this.rendering.length * renderSettings.size;
        }
        else if (this.direction == 'east' || this.direction == 'west') {
            return 1 * renderSettings.size;
        }
    }

    calculateWidth() {
        if (this.direction == 'north' || this.direction == 'south') {
            return 1 * renderSettings.size;
        }
        else if (this.direction == 'east' || this.direction == 'west') {
            return this.rendering.length * renderSettings.size;
        }
    }
}

module.exports = SVG;