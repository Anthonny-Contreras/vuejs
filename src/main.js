import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LastArticlesComponent from './components/LastArticlesComponent.vue'
import BlogComponent from './components/BlogComponent.vue'
import FormComponent from './components/FormComponent.vue'
import PageComponent from './components/PageComponent.vue'
import MiComponente from './components/MiComponente.vue'
import ErrorComponent from './components/ErrorComponent.vue'

Vue.config.productionTip = false

// Router configuration 
Vue.use(VueRouter);
const routes = [
  {path: '/', component: LastArticlesComponent},
  {path: '/home', component: LastArticlesComponent},
  {path: '/blog', component: BlogComponent},
  {path: '/form', component: FormComponent},
  {path: '/page1', component: PageComponent},
  {path: '/page2', component: MiComponente},
  {path: '*', component: ErrorComponent},
];
const router = new VueRouter({routes, mode: 'history'});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
