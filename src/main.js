import App from './App.vue';
import Vue from 'vue';
import { Table, TableColumn } from 'element-ui';
console.log(a);
const a = 1;

Vue.use(Table);
Vue.use(TableColumn);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
