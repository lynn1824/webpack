module.exports = {
    entry: "./entry.js",//入口js， 可以是字符串，可以是数组， 可以是对象
    output: {
        path: __dirname,//生成的，入口文件对应的出口文件的存放的路径
        filename: "entry-bundle.js"//出口文件名称
    }
};
