<!--
 * @Author: your name
 * @Date: 2021-07-05 11:39:28
 * @LastEditTime: 2021-07-07 20:37:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-xuwu/help.md
-->
# vue-cli插件vue-cli-plugin-xuwu(虚无)模板助手

## 开发背景
日常工作中经常会创建一些新的项目工程，项目会包括pc端和移动端，每次创建项目时候都需要从不同项目中去copy新项目中需要的基础建设代码，每次迁移完成完成后就会遇到各种各样莫名其妙的问题 
 1. 因忘记迁移某些依赖或代码导致出现各种错误
 2. copy的工程基础建设不完善，新的工程在某些场景会产生各种问题，比如（因未兼容低版本浏览器在pc端小程序上面内嵌H5出现白屏）
 3. 文件太多，迁移了大量无用代码  
 4. 对于一些代码是否选择迁移很难选择
 5. 原工程的某些用法不规范，迁移后依然还是不规范。比如（Element原本使用了按需引入，但又重新引入了一遍样式）
 6. 每个工程的项目结构和风格几乎不一致
 ```
 import 'element-ui/lib/theme-chalk/index.css'
 ```
而每次解决这些问题都需要花费大量的时间，而且极其的不方便，基于这种情况着手开始开发vue-cli-plugin-xuwu模版助手。

## 目的
vue-cli-plugin-xuwu模板助手是一款自由开放的vue插件，通过插件的方式对vue生态圈的所有项目进行高效，便捷的扩展。从源头上降低因各种原因导致基础建设的不完整。从而提高团队项目结构的和代码风格的一致性。因插件针对的是所有vue相关生态圈，所以不会内嵌任何相关脚手架，只是在创建完成后对项目进行完善补充。

## 使用场景
> 提示：  
> 适用于vue相关的所有新老项目，可多次安装且不会覆盖掉之前的配置  
> 内部会自动适配js/ts，vue-cli创建的web项目内部自动适配vue3。uniapp官方暂未支持vue3
* vue-cli创建的web项目（pc和移动端）
* uniapp创建的项目

## 安装
```
vue add vue-cli-plugin-xuwu
```
## 地址
```
git地址：https://gitee.com/dawwdadfrf/vue-cli-plugin-xuwu.git
```

## 功能介绍
> vue-cli-plugin-xuwu模板助手在安装时一直秉持着自由的原则，所有的功能均可以选择性的安装，也可以使用作者推荐的功能进行安装，目前vue-cli-plugin-xuwu模板助手在web项目方向完成了6个基础功能的封装，2个UI框架的封装，在uniapp方向完成了4个基础功能的开发，总共涉及了16个页面。

### vue-cli 
1. #### 扩展环境变量  
### 默认情况下分为development和production两种开发环境，日常工作中我们可能会分为更多的环境，比如开发环境，测试，预发布环境，线上环境等等一些列环境，插件内新增加了API_ENV属性，用于满足日常需求。插件内的很多功能都会用到API_ENV这个属性。
2. #### ajax请求模板   
### 帮助大家封装好了一个公共的ajax请求模块，web项目使用axios库，uniapp使用官方提供的方法。所有的请求内置了域名配置文件和扩展环境变量。同时也为大家提供了一个demo。
3. #### commit代码时统一风格
### 利用prettier和eslint对整个工程制定了一套标准的规则，每次在commit代码时候都会进行eslint的校验。如果prettier可以自动修复的则直接提交到仓库中，否则需要自己手动修改，再次进行尝试。这个功能解决了一个根本问题，可能有些小伙伴电脑上有代码格式化工具，每次修改别人写的某个文件，他的结构就会全部改变。结果就是整个代码都是自己的名字，或者别人拉取代码时候就会有冲突。
> 很多人都会嫌这个功能太麻烦了，因为每次修改可能会有一堆的eslint报错，导致不愿意使用这个功能。在这里提一个开发小窍门，开2个命令行窗口，一个专门启动该项目。一个随时运行 npm run lint，随时格式化并修复代码。
4. #### 生产环境去掉console
### 在日常开发中经常用到console来找bug或者调试一些信息。该功能的目的就是在线上环境时候去掉console的所有信息，从而提高安全性。
5. #### 移动端consoleLog控制台
#### 移动端环境下在开发环境下查看控制台特别的麻烦，对于一些日志信息也很难看到，因此为大家提供了consoleLog控制台的插件，方便查找一些问题。该功能做了边界处理，只有在非上线环境才生效
6. #### 移动端适配插件
### 移动端环境根据不同设备屏幕进行尺寸的适配，并且自动将px转为rem。
7. #### Vant/Element Ui库
#### UI库在移动端默认使用Vant在pc端默认使用Element。均通过按需引入的方式引入。

### uniapp
1. #### 扩展环境变量（同上）
2. #### ajax请求模板（同上）
3. #### commit代码时统一风格（同上）
4. #### sass依赖
#### uniapp官方推荐使用sass来解析样式。

### 其他内部小功能
1. #### 扩展打包命令，打包后可以分析各个模块的体积
2. #### 兼容低版本浏览器

## 展望未来
插件内部会陆续扩展一些其他功能，敬请期待


