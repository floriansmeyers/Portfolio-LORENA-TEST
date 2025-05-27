import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../Views/HomeView.vue';

const routes = [
  { path: '/', name: 'HomeView',component: HomeView }, 
  
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
  scrollBehavior(to, from, savedPosition) {
   
    return { top: 0 }
  }
});

export default router;
