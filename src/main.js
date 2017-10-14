import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'

// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

Vue.filter('to-uppercase',function(value){
    return value.toUpperCase()
});

Vue.filter('snippet',function(value){
    return value.slice(0,100)+'.......';
});

Vue.filter('snippest',function(value){
    return value.slice(0,30)+'.......';
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
