import App from './App.vue';
import Vue from 'vue';
import { Table, TableColumn } from 'element-ui';

Vue.use(Table);
Vue.use(TableColumn);

new Vue({
  render: h => h(App),
}).$mount('#app')
