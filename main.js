import App from './src/App.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
// 404容易發生錯誤，所以不建議使用動態加載
import NotFound404 from './src/page/NotFound404.vue';
// babel
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const PageA = () => import('./src/page/PageA.vue');
const PageB = () => import('./src/page/PageB.vue');

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/pageA', component: PageA },
    { path: '/PageB', component: PageB },
    { path: "*", component: NotFound404 }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// 載入 service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker-dist.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
