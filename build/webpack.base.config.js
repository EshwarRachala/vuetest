var path = require('path')

module.exports = {
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'build.js',
        publicPath: 'dist/'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    eslint: {
        configFile: './.eslintrc.json'
    },
    vue: {
        loaders: {
            js: 'babel!eslint'
        }
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue!eslint'
        }, {
            test: /\.js$/,
            loader: 'babel!eslint',
            exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//
        }, {
            test: /\.css$/,
            loaders: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            query: {
                name: '[name].[ext]?[hash]'
            }
        }]
    }
}