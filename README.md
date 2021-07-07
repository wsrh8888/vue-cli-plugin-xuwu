<!--
 * @Author: your name
 * @Date: 2021-04-29 17:48:57
 * @LastEditTime: 2021-07-07 14:34:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xuwu/README.md
-->
# vue-cli 工程初始化模版插件

## 地址

```
git地址：https://gitee.com/dawwdadfrf/xuwu.git
```
## 引言

```
在日常开发中，经常创建一些新的项目，每次都通过各种方式去copy代码，
导致经常丢失一些代码，项目结构也千差万别，为了解决这种情况。
当创建完成vue-cli项目时候引入一个自定义插件，通过自定义选项，
快速的根据自己的喜好完成项目基建。
```

## 安装命令

``` development
vue add xuwu
```
## 功能说明
```
插件目前只做了vue2部分。vue3部分还在完善中，所有的插件都可以根据自己的喜好自定义配置安装
功能大概包含，
  1.ts/js  基础架构模版
  2.commit时候主动格式化代码插件(eslint，prettier相关配置)
  3.移动端时console控制台
  4.移动端时适配插件
  5.代码兼容低版本浏览器
  6.线上环境去掉console.log信息
  7.axios请求封装
  8.npm镜像源修改
```

```
xuwu
├─ .DS_Store
├─ README.md
├─ generator
│  ├─ common
│  │  ├─ babel.config.js
│  │  ├─ index.js
│  │  ├─ main.js
│  │  ├─ main.vue.js
│  │  ├─ package.js
│  │  ├─ template
│  │  │  ├─ _eslintignore
│  │  │  ├─ _eslintrc.js
│  │  │  ├─ _prettierrc
│  │  │  ├─ babel.config.js
│  │  │  ├─ rem.js
│  │  │  └─ vue.config.js
│  │  └─ vue.config.js
│  ├─ commonTemplate
│  │  ├─ _npmrc
│  │  └─ src
│  │     ├─ App.vue
│  │     └─ views
│  │        └─ Home.vue
│  ├─ index.js
│  ├─ jsTemplate
│  │  └─ src
│  │     ├─ api
│  │     │  ├─ common.js
│  │     │  └─ index.js
│  │     ├─ plugins
│  │     │  ├─ element.js
│  │     │  ├─ index.js
│  │     │  └─ vant.js
│  │     └─ utils
│  │        ├─ ajax.js
│  │        └─ config.js
│  └─ tsTemplate
│     └─ src
│        ├─ api
│        │  ├─ common.ts
│        │  └─ index.ts
│        ├─ plugins
│        │  ├─ element.ts
│        │  ├─ index.ts
│        │  └─ vant.ts
│        └─ utils
│           ├─ ajax.ts
│           └─ config.ts
├─ index.js
├─ package-lock.json
├─ package.json
├─ prompts.js
├─ shims-tsx.d.ts
├─ shims-vue.d.ts
└─ tsconfig.json

```

本地开发
 npm install --save-dev file:../../xuwu

 vue invoke xuwu