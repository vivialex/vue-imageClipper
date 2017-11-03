const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const extractLess = new ExtractTextPlugin({
    filename: 'main.css?hash=[contenthash]',
    allChunks: true
});

module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js?hash=[hash]'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.(css|less)$/,
                use: extractLess.extract(['css-loader', 'postcss-loader', 'less-loader'])
            },
            {
                test: /\.(vue)$/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        extractCSS: true
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10,
                        name: '[name].[ext]?hash=[hash]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, './src/index.html')}),
        extractLess,
    ],
    devtool: 'eval',
    resolve: {
        alias: {
            Vue: 'vue/dist/vue.esm.js',
            component: path.resolve(__dirname, './src/component'),
            image: path.resolve(__dirname, './src/image')
        }
    }
};
