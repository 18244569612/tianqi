
import Vue from 'vue'
import App from './App.vue'
import '@/assets/tailwindcss.css'
import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 引入Element UI样式
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  render: h => h(App),
}).$mount('#app')
