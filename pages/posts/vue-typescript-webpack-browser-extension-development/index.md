---
id: 585
title: Vue TypeScript Webpack 浏览器插件开发
date: 2020-05-06 00:13:24
tags:
  - extensions
  - typescript
  - vue
  - webpack
categories:
  - 瞎研究
---

折腾了两天，终于把这个做成了能打包成浏览器加载的插件了

姑且在这里记录一下，也算是前端学习笔记

<!--more-->

# 目录结构

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂icon
 ┃ ┃ ┣ 📜128.png
 ┃ ┃ ┣ 📜16.png
 ┃ ┃ ┗ 📜48.png
 ┃ ┗ 📂styles
 ┃ ┃ ┣ 📜global.scss
 ┃ ┃ ┣ 📜options.scss
 ┃ ┃ ┗ 📜popup.scss
 ┣ 📂background
 ┃ ┗ 📜background.ts
 ┣ 📂components
 ┃ ┣ 📂ui
 ┃ ┃ ┗ 📜button.vue
 ┃ ┣ 📜options.vue
 ┃ ┗ 📜popup.vue
 ┣ 📂options
 ┃ ┣ 📜options.html
 ┃ ┗ 📜options.ts
 ┣ 📂popup
 ┃ ┣ 📜popup.html
 ┃ ┗ 📜popup.ts
 ┣ 📂scripts
 ┃ ┣ 📂base
 ┃ ┃ ┣ 📂enums
 ┃ ┃ ┃ ┗ 📜url.ts
 ┃ ┃ ┗ 📜extConfig.ts
 ┃ ┣ 📜hotKeyMenu.ts
 ┃ ┣ 📜ui.ts
 ┃ ┣ 📜util.ts
 ┃ ┗ 📜viv.ts
 ┣ 📂typings
 ┃ ┣ 📜global.d.ts
 ┃ ┗ 📜hotKeyMenu.d.ts
 ┣ 📂_locales
 ┃ ┣ 📂en
 ┃ ┃ ┗ 📜messages.json
 ┃ ┣ 📂ja
 ┃ ┃ ┗ 📜messages.json
 ┃ ┗ 📂zh_CN
 ┃ ┃ ┗ 📜messages.json
 ┣ 📜btools.ts
 ┣ 📜manifest.json
 ┗ 📜vue-shims.d.ts
```

# 作用

不清楚这么分好不好，姑且来说说它们都有什么作用

`_locales` 存的是多语言文件

`assets` 是图标和 sass 文件，图标会在打包时直接复制到编译后的目录

`components` 放的是 vue 组件，目前只有俩，之后随着需要添加

`background` 插件的 `background.js` 所需要的，这个不需要页面所以只放了一个 `.ts`

`options` 插件的配置页面

`popup` 插件右上角弹出页面

`scripts` 插件功能所需要的代码文件，里面那些 ui 啥的我还没想好怎么写，姑且先放着

`btools.ts` 插件功能的入口文件，这个文件会引入`scripts`中的所有插件功能相关的文件

`manifest.json` 插件配置文件

# 具体写法

这些是怎么打包成一个插件的呢，用`popup`举个例子

首先是`webpack.config.js`指定好入口文件

```javascript
entry: {
  btools: './src/btools.ts',
  background: './src/background/background.ts',
  popup: './src/popup/popup.ts',
  options: './src/options/options.ts',
},
```

入口文件是`popup.ts`

```javascript
import Popup from '@components/popup'
import Vue from 'vue'
import '@styles/popup'

export default new Vue({
  data: { test1: 'World' },
  components: {
    Popup
  },
  render: h => h(Popup)
}).$mount('#app')
```

这里面引入了 Vue、popup.vue、popup.sass

然后 `popup.vue` 是这么写的

```vue
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component
export default class Popup extends Vue {
  // 初始数据可以直接声明为实例的 property
  message = 'Popup'
}
</script>
```

`popup.sass`没写啥就不用看了

最后页面会输出到`popup.html`上

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>popup</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

这个HTML文件是个模板，使用插件`html-webpack-plugin`，最后会打包到编译后的目录，这里指定了`chunks`是只让这个页面引入`options.js`

```javascript
new HtmlWebpackPlugin({
  filename: 'options.html',
  template: './src/options/options.html',
  minify: {
    collapseWhitespace: true,
    removeComments: true
  },
  chunks: ['options']
})
```

最后配置好`manifest.json`，就可以直接用浏览器导入插件看效果了

![](//imba97.cn/uploads/2020/05/btools-vue.png)

`manifest.json`可以用一个叫`write-json-webpack-plugin`，这个插件可以加载`.json`文件，转成一个对象，就可以修改

使用这个比如这样可以修改版本号和根据浏览器做不同的修改

```javascript
let manifestJSON = require('./src/manifest.json')

// 版本号
manifestJSON.version = '2.1.0'

// 火狐浏览器
manifestJSON.browser_specific_settings = {
  gecko: {
    id: 'mail@imba97.cn',
    strict_min_version: '57.0'
  }
}
manifestJSON.applications = {
  gecko: {
    id: 'mail@imba97.cn',
    strict_min_version: '57.0'
  }
}
```

最后在使用插件把修改后的对象打包成`.json`文件

```javascript
(manifestJSON && new WriteJsonWebpackPlugin({
  pretty: false,
  object: manifestJSON,
  path: '/',
  filename: 'manifest.json'
}))
```

这个方法是从[bilibili-helper](https://github.com/bilibili-helper/bilibili-helper-o)抄来的，大佬的插件，可以说是看B站网页版必装的插件

先总结到这里，今后边学 Vue 边学 TypeScript 边学 Webpack 边开发，大概会更新文章

本插件也放在了 Github 上，有兴趣的话可以看看 [Btools-vue](https://github.com/imba97/Btools-vue)
