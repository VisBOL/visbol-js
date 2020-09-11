const path = require('path');

module.exports = {
    entry: './lib/rendering/Rendering.js',
    output: {
        filename: 'rendering.js',
        globalObject: "this",
        libraryTarget: 'umd'
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
    },
    externals: {
        // Don't bundle react
        react: 'react'
    }
};