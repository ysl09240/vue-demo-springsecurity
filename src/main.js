// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
/**
 * 这个不是vue的规定而是node加载模块的方式,当require('./router')(import会被转为require),node是这样的寻找目标的:
 * 1.首先寻找目录下有没有router.js或者router.node,如果有就导入
 * 2.如果没有看是否有router目录,如果没有就require失败,抛出异常"Cannot find module './router'"
 * 3.如果有router目录会在其下寻找package.json文件,如果有则按照package的配置来导入
 * 4.如果没有package.json,看是否有index.js或者index.node,如果有就导入没有就失败
 */
import router from './router'


Vue.config.productionTip = false;

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

