import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


import { ValidationProvider, extend} from 'vee-validate';
import { required} from 'vee-validate/dist/rules';

extend('min', {
  
  validate(value, args){
      return value.length >= args.length;
  },
  params: ['length'],
  message: 'Minimu two letters is requred'
});
extend('required', {
  ...required,
  message: 'This field is required'
});
Vue.component('ValidationProvider', ValidationProvider);




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
