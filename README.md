
# gallery-by-react
one photo gallery project based on react

根据慕课网上的视频所做的一个小项目, 通过这个项目主要练习了一下CSS3、React组件化。

gif图有点问题
![](https://github.com/ZrdZz/gallery-by-react/raw/master/src/gif/3.gif)

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
            
## @font-face

`@font-face`规则支持的CSS属性：`font-family`,`src`,`font-weight`,`font-style`,`unicode-range`,`font-variant`,`font-stretch`,`font-feature-settings`

- `font-family`: 字体变量,名称随意,原本系统就有的名称不能随便设置。
- `src`: 调用字体文件。
- `font-style`: 不同样式使用不同字体。
- `font-weight`: 不同字重使用不同字体。
- `unicode-range`: 让特定的字符或字符片段使用特定的字体。

***


### 优化

chrome中每个页面都有一个render进程, 其中包含了主线程和合成线程; 主线程中会执行js、css的计算、计算layout(每个元素的大小位置)、将页面元素绘制成位图(paint),然后发送位图到合成线程。在合成线程中会将位图发给GPU, 然后计算页面中可见部分和即将可见部分, 最后GPU绘制位图到屏幕上(draw)。

当使用一些3D属性时, 元素就会处于复合层中,这时候执行动画不会触发layout和paint, 只需要通知GPU来进行处理, 不需要CPU参与。

但是因为CPU和GPU之间的带宽有限, 如果复合层太多达到GPU瓶颈, 也会影响动画的流畅度。

在这个项目中刚开始每张图片是通过absolute + left + top + transition来实现随机分布的, 点击中心图片时通过transform来进行翻转和平移; 点击其他图片时, 图片会移到中心, 每张图片都会重新计算top和left, 会触发大量的重绘重排, 性能会非常差。

后来了解到使用transform这些3D属性会开启硬件加速, 可以使用GPU来加速渲染网页。

一开始我是将图片的随机定位也改成transform来进行, 但是因为它的值是随机生成的, 所以只能通过内联样式来使用, 这是当你点击它翻转时不会起作用, 因为内联样式优先级更高, 然后我给反转的样式添加了!important, 但是又出现了一个新问题, 它是根据原来的位置即页面左上角来进行反转的。

后来又找到另一种方法, 即通过getComputedStyle来计算出图片的transform,然后在这个基础上进行翻转和平移。

注意: 这里得出的值是一个矩阵(matrix(a,b,c,d,e,f))。

















