const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "none",
    entry: {
        'add-number': './src/index.js',
        'add-number.min': './src/index.js',
    },
    output: {
        filename: '[name].js',
        library: 'addNumber',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            })
        ]
    }
}