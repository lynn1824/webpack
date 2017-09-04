/**
 * Created by jason on 2017/3/9.
 */
// 引入webpack插件(html-webpack-plugin)
var htmlWebpackPlugin = require('html-webpack-plugin');

/***
 *  entry: 以字符串的方式进行打包处理
 *  @desc: 打包文件为main.js, 打包后输出到dist/js文件夹下面的bundle.js文件
 * **/
// module.exports = {
//     entry: './src/script/main.js',   // 打包从哪个文件开始
//     output: {
//         path: './dist/js',  // 打包后存放的目录
//         filename: 'bundle.js'  // 打包后js
//     }
// }

/**
 * entry: 以数组的方式进行打包,适用于多个文件打包到一个文件中
 * @desc: 打包文件为main.js/a.js, 打包后输出到dist/js文件夹下面的bundle.js文件
 **/
// module.exports = {
//     entry: ['./src/script/main.js', './src/script/a.js'],
//     output: {
//         path: './dist/js',  // 打包后存放的目录
//         filename: 'bundle.js'  // 打包后js
//     }
// }

/**
 * entry: 以对象的方式打包,适用于
 * @desc: 打包文件为main.js/a.js, 打包后输出到dist/js文件夹下面的bundle.js文件。这样main.js打包后会覆盖a.js打包,所以存在这样的问题
 * 所以在output配置中存在[name], [hash], [chunkhash]这样的关键字
 **/
// module.exports = {
//     entry: {
//         main: './src/script/main.js',
//         a: './src/script/a.js'
//     },
//     output: {
//         path: './dist/js',  // 打包后存放的目录
//         filename: 'bundle.js',  // 打包后js
//     }
// }

/**
 * entry: 以对象的方式打包,适用于
 * @desc: 打包文件为main.js/a.js, 打包后分别输出到a.bundle.js与main.bundle.js
 * [name]: 跟随对象key的名字打包
 * [hash]: 相当于一个版本号, 不过是针对本次两个key打包的一个共同版本号
 * [chunkhash]: 相当于一个版本号, 不过是针对两个key单独的一个版本号,如果js文件有改动,hash也会跟着变化,如果没改动,不会改变
 * @plugins: webpack插件引入
 *
 * @注意点: hash是唯一编号,相当于md5
 **/
module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        path: './dist',  // 打包后存放的目录
        filename: 'js/[name]_[chunkhash].js',  // 打包后js分别为a_e6f32821a5d77cb2ec5b.bundle.js和main_007147a29b08a293fb91.bundle.js
        publicPath: 'http://cdn.com/',  // 设置绝对地址
        minify: {
            removeComments: true
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            // inject: 'head',   // 将脚本放入头部
            inject: false,   // 不自动注入
            title: 'webpack is A_PAGE',
            // chunks:['main', 'a'],
            excludeChunks:['b', 'c']  // 除了b, c这两个chunk之外,其它的都会被加载进来
            // 压缩属性
            // minify: {
            //     removeComments: true,  // 删除注释
            //     collapseWhitespace: true // 删除空格
            // }
        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            // inject: 'head',   // 将脚本放入头部
            inject: false,   // 不自动注入
            title: 'webpack is B_PAGE!',
            chunks: ['main', 'b']
        }),
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'index.html',
            // inject: 'head',   // 将脚本放入头部
            inject: false,   // 不自动注入
            title: 'webpack is C_PAGE!',
            chunks:['main', 'c']
        })
    ]
}
