# gallery-by-react
one photo gallery project based on react

根据慕课网上的视频所做的一个小项目，第一次写有很多不足，代码性能很差，等总结完后尝试着优化一下，通过这个项目主要练习了一下webpack配置、CSS3、React组件化。

# 总结一些知识点

## webpack配置

- `--save-dev`是将模块安装在开发环境下的参数,`--save`是将模块安装在生产环境中。
- `npm init`创建一个`package.json`文件,里面包含当前项目的依赖模块、自定义的脚本任务等等。
- `__filename`：当前模块文件的绝对路径,`__dirname`:当前模块文件所在的目录的绝对路径,两个都是全局变量。
- webpack-dev-server： 
     1. webpack-dev-server生成的包并没有放在你的真实目录中,而是放在了内存中。
     2. 支持两种模式自动刷新页面：
           - iframe模式(页面放在iframe中，当发生改变时重载)。
           - inline模式(将webpack-dev-server的客户端入口添加到包bundle中)。
           两种模式都支持热模块替换(Hot Module Replacement)，只替换更新的部分，而不是页面重载。
- 现在webpack内置可以处理json文件
- Babel是编译JavaScript的平台，可以直接在项目中使用ES6、ES7、JSX等。
     1. Babel的配置可以单独放置在`.babelrc`文件中。
- `css-loader`、`style-loader`、`sass-loader`
     1. `css-loader`使你能够使用类似`@import`和`url(...)`的方法实现`require()`的功能,`style-loader`将所有的计算后的样式加入页面中，
        二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。
     2. 一定要注意顺序：style-loader css-loader sass-loader
- `url-loader`、`file-loader`
     1. `url-loader`内部封装了`file-loader`。
     2. 当文件大小小于`limit`参数时,`url-loader`会把文件转为DataURL,大于`limit`参数时,`url-loader`会调用`file-loader`进行处理,参数也会传给`file-loader`。
     3. 参数：
          - publicPath: 表示打包文件中引用文件的路径前缀，可以是绝对路径或相对路径，相对路径是相对于`index.html`。
          - outputPath：表示输出文件路径前缀,`outputPath: img/`,图片被打包时，就会在输出文件夹下新建（如果没有）一个名为img的文件夹，把图片放到里面。
            两路径都以/结尾。
