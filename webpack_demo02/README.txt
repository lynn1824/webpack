1、webpack.config.js 是webpack的配置文件;
2、package.json中包含了该项目中的依赖包,开发环境依赖包与代码库依赖包
    开发环境依赖包命令: npm install html-webpack-plugin --save-dev
    代码库依赖包:npm install html-webpack-plugin --save
3、html-webpack-plugin插件,用于与原index.html生成与js动态引入的插件

4、loader与plugin的区别
    loader只是用来处理资源文件的,它接受资源文件这么一个参数,然后返回一个新的资源;
    plugin是用来处理一些功能与数据传播等的某项功能
   loader特性:
    1、可以串联使用

    autoprefixer插件: 为css加浏览器前缀的插件,如:web_kit  moz等东西

--save-dev  是开发环境下使用的loader与plugin, 存放在package.json中的devDependencies属性中。
--save      一般是一些js库文件的引用,如JQ,Vue库等

Loader的处理方式是从右到左开始执行
