var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');  // 绝对路径

module.exports = {
    context: __dirname,
    entry: {
        main: './src/app.js'
    },
    output: {
        path: './dist',  // 打包后存放的目录
        filename: 'js/[name].bundle.js',  // 打包后js分别为a_e6f32821a5d77cb2ec5b.bundle.js和main_007147a29b08a293fb91.bundle.js
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',            // es6转化loader
                exclude: path.resolve(__dirname, 'node_modules'), // 不处理该文件夹下的文件, 支持多文件数组
                include: path.resolve(__dirname, 'src'),
                query: {
                    presets: ['latest']
                }
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src/css'),
                loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
            },
            {
                test: /\.less$/,
                loader: 'style!css!prostcss!less'
            }
        ]
    },
    postcss: [
        require('autoprefixer')({
            broswers: ['last 5 versions']   // 最近5个浏览器进行处理
        })
    ],
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]
}