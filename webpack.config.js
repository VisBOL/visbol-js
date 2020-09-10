const path = require('path');

module.exports = {
    entry: './lib/rendering/Rendering.js',
    output: {
        filename: 'rendering.js',
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
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react') ,
            'react-dom': path.resolve(__dirname, './node_modules/react-dom')
        }
    },
    externals: {
        // Don't bundle react or react-dom
        'react': {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        'react-dom': {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    }
};