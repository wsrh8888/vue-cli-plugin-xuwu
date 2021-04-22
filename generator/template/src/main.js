/*
 * @Author: your name
 * @Date: 2021-04-22 16:35:56
 * @LastEditTime: 2021-04-22 19:50:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-plagin/plagin/template/src/main.js
 */
import Vue from 'vue';
import App from './App';
import './plugins/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
