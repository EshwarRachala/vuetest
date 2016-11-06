var path = require('path');
var webpack = require('webpack');

module.exports = {
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    themeLoader: {
        themes: ['./src/theme/app.scss',
            './node_modules/vuestrap/theme/bootstrap.scss']
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//
            },
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /bootstrap\/js\//,
                loader: 'imports?jQuery=jquery'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel'
        }
    },
    devServer: {
        historyApiFallback: true,
       // noInfo:true,
        colors: true,
        hot: true,
        inline: true
      //  headers: { 'Access-Control-Allow-Origin': '*' }
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ])
}