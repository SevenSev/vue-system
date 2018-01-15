// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入vue-resource
import Resource from 'vue-resource'
//引入svg-icon
import Icon from 'vue-svg-icon/Icon.vue'

//引入字体图标font-awesome
// import 'font-awesome/css/font-awesome.css'
  
//全局引入element-UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.use(Resource);

Vue.component('svg-icon', Icon);

//生产环境的提示
Vue.config.productionTip = false
  
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
