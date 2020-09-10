const path = require('path');

module.exports = {
    entry: './lib/rendering/Rendering.js',
    output: {
        filename: 'rendering.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: ['/node_modules/'],
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};