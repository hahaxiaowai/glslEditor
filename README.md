# [GlslEditor](https://github.com/patriciogonzalezvivo/glslEditor)
## 克隆仓库更新说明

### 2022-4-23
1. 打包js改用rollup,gulp仅打包css 没有热更新了（懒得去纠结gulp打包js)
2. 可以使用最新node版本进行打包了
3. 打包结果分为es umd两个版本
### 2022-4-21
1. 原仓库对localStorage的读取逻辑有一定的错误，于是修改了一下
2. 增加是否使用缓存、加载缓存的开关
3. 汉化
4. 导出现在纯粹为导出为本地文件，去除分享链接一类功能
5. 新建多个tag,不再使用时间戳


## 其他说明
原仓库已经很久了，使用的node版本还是8，如果你使用现在的node版本安装相关环境，会有很多问题，如果更新了引用库的版本，会导致打包会出现问题（打包相关库版本跨度过大，有一些破坏性更改），如果你熟悉gulp你可以把gulp打包js修复一下

本库为个人方便使用而更改。
![](http://patriciogonzalezvivo.com/images/glslEditor/00.gif)

[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4BQMKQJDQ9XH6)

Friendly GLSL Shader editor based on [Codemirror](http://codemirror.net/) compatible with [glslViewer](https://github.com/patriciogonzalezvivo/glslViewer) (C++/OpenGL ES) and [glslCanvas](https://github.com/patriciogonzalezvivo/glslCanvas) (JS/WebGL).

Was originally develop to work as a embedded editor for [The Book of Shaders](https://thebookofshaders.com). But now have grown as a stand alone Web app. Thanks to their compatibility with other apps of this ecosystems like [glslViewer](https://github.com/patriciogonzalezvivo/glslViewer) that runs in the RaspberryPi directly from console, [GlslEditor](https://github.com/patriciogonzalezvivo/glslEditor) interact with other projects like [OpenFrame.io](http://openframe.io) allowing the user to export the shaders to frames with only one button.

![](http://patriciogonzalezvivo.com/images/glslEditor/01.gif)

You can use it directly from [editor.thebookofshaders.com](http://editor.thebookofshaders.com/) or host one on your own website by including the two ```build``` files: ```glslEditor.css``` and ```glslEditor.js```:

```html
<link type="text/css" rel="stylesheet" href="https://rawgit.com/patriciogonzalezvivo/glslEditor/gh-pages/build/glslEditor.css">
<script type="application/javascript" src="https://rawgit.com/patriciogonzalezvivo/glslEditor/gh-pages/build/glslEditor.js"></script>
```

You can also install it through npm:

```bash
npm install glslEditor --save
```

And then you are ready to use it by passing an **DOM element** or **query selector string**, and a set of options;

```html
<body>
    <div id="glsl_editor"></div>
</body>
<script type="text/javascript">
    const glslEditor = new GlslEditor('#glsl_editor', {
        canvas_size: 500,
        canvas_draggable: true,
        theme: 'monokai',
        multipleBuffers: true,
        watchHash: true,
        fileDrops: true,
        menu: true
    });
</script>
```

This is a list of all the **options** you can set up:

| Property             | type | description  | default  |
|----------------------|------|---|-----|
| ```canvas_size```    |number| Initial square size of the shader canvas |```250```|
| ```canvas_width```   |number| Initial width of the shader canvas |```250```|
| ```canvas_height```  |number| Initial height of the shader canvas  |```250```|
| ```canvas_draggable```| bool | Enables dragging, resizing and snaping capabilities to the shader canvas |```false```|
| ```canvas_follow```  | bool | Enables the shader canvas to follow the curser |```false```|
| ```theme```  | string | Codemirror style to use on the editor |```"default"```|
| ```menu``` | bool | Adds a menu that contain: 'new', 'open', 'save' and 'share' options | ```false```|
| ```multipleBuffers``` | bool | Allows the creation of new tabs |```false```|
| ```fileDrops``` | bool | Listen to Drag&Drop events |```false```|
| ```watchHash```| bool | Listen to changes on the wash path to load files |```false```|
| ```frag_header``` | string| Adds a hidden header to every shader before compiling |```""```|
| ```frag_footer``` | string| Adds a hidden footer to every shader before compiling |```""```|
| ```indentUnit``` | number | How many spaces a block should be indented | ```4``` |
| ```tabSize``` | number | The width of a tab character | ```4``` |
| ```indentWithTabs``` | bool | Whether, when indenting, the spaces should be replaced by tabs  | ```false``` |
| ```lineWrapping``` | bool | Whether CodeMirror should wrap for long lines | ```true``` |
| ```autofocus``` | bool | Can be used to make CodeMirror focus itself on initialization | ```true``` |

## Some of the features features

- Inline Color picker and 3D vector picker for '''vec3''

![](http://patriciogonzalezvivo.com/images/glslEditor/pickers1.gif)

- Inline Trackpad for '''vec2'''

![](http://patriciogonzalezvivo.com/images/glslEditor/picker2.gif)

- Slider for floats

- Inline error display

![](http://patriciogonzalezvivo.com/images/glslEditor/error.gif)

- Breakpoints for variables

![](http://patriciogonzalezvivo.com/images/glslEditor/debugger.gif)

## Electron Version

When developing use this to automatically reload Electron on every change

```bash
npm run dev
```

For use just do:

```bash
npm run start
```


## TODOs

- [ ] Twitter sharing options
- [ ] Facebook sharing options

- [ ] Open modal from url, log or file

- [ ] Uniform widgets
- [ ] Time widget
- [ ] Texture inspector

## Author

[Patricio Gonzalez Vivo](https://twitter.com/patriciogv): [github](https://github.com/patriciogonzalezvivo) | [twitter](https://twitter.com/patriciogv) | [website](http://patriciogonzalezvivo.com)

## Acknowledgments

Special thanks to:

- [Lou Huang](@saikofish): glslEditor born from learned leassons on [TangramPlay](http://tangrams.github.io/tangram-play/). His code and wizdom is all arround this project.
- [Brett Camper](@professorlemeza): media capture and texture class (on GlslCanvas) are totally his credit.
- [Jaume Sanchez Elias](@thespite): thanks for the big help with the profiler tester.
- [Kenichi Yoneda (Kynd)](@kynd.info): helped with the UI and presentation mode
- [Thomas Hooper](@tdhooper): performance improvements


