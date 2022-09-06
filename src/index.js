import Vue from 'vue';
import App from './App.vue';
//vue实例化
let div = document.createElement('div');
div.setAttribute('id', 'noodb');
document.body.append(div);
new Vue({
  render: (h) => h(App)
}).$mount('#noodb');
