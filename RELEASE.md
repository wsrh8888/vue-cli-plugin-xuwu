## 版本更新

### 1.3.0
> 1、ast部分进行优化
> 2、删除模块互相调用导致的代码冗余逻辑，保存每个功能的独立性
> 3、增加file-utils文件库，包括文件的上传和一些文件相关的通用方法
> 4、兼容vite3版本
> 5、增加文档模块
> 6、优化vue2中vue.config的解析


### 1.2.13
> 1、兼容vite3版本
> 2、优化环境变量相关默认配置，一些场景默认不在增加环境变量配置


### 1.2.11
> 1、优化prompts相关代码
> 2、vite新增加pinia，svg解析
> 3、使用ast对部分读写文件进行重写
> 4、修复package引用无用变量bug

### 1.2.9
> 1、修复vite按需引入混入了babel-plugin-import依赖
> 2、优化vue.config.js的初始化时机，提前到了初始化环境变量时
> 3、优化vue.config.js 的配置lintOnSave， eslint报错奖不在阻断代码编译失败

### 1.2.7
> 1、修复vite，main入口文件部分内容添加失败问题
> 2、修复vite，去掉console默认添加了axios依赖
> 3、修复vite，axios请求时候未添加axios依赖

### 1.2.0，兼容vite 
> 1. 除ES6转ES5，剩余全部兼容vite 
> 2. 优化部分冗余逻辑 
> 3. 优化部分历史bug，部分字段对于API_ENV的属性未统一。现在统一为prod 
> 4. 重构项目代码，避免强制兼容vite带来的各种问题。使项目结构更加合理简洁 
> 5. uniapp新增加对vite的支持 
> 6. 目前支持已经支持
>>  1. vite-uniapp-vue3
>>  2. vite-web-vue3
>>  3. webpack-uniapp-vue2
>>  4. webpack-web-vue2
>>  5. webpack-web-vue3
### 1.1.0版本
> 1. 使用es6重构代码
> 2. 将部分js文件不再单独维护，使用ts编译后得到
> 3. 优化全局属性获取方式，由值传递模式改为单例模式共享数据
> 4. 优化vant组件按需引入关于样式引入问题
> 5. 增加antDesignVue相关功能
> 6. 增加文件注释
> 7. vue.config.js模块增加依赖中es6解析为es5的配置

### 1.1.1版本
> 1. 将ES6转为ES5插件拆分为独立模块
> 2. 优化依赖安装，如果已经安装的依赖则跳过
> 3. 删除文件相关的注释
> 4. 优化vue.config.js文件生成.map配置。如果非线上环境则开启生成map
