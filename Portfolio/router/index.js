import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import About from '../views/About.vue';


const routes = [
  { path: '/', name: 'Home', component: Home }, 
  { path: '/Projects', name: 'Projects', component: Projects},
  { path: '/About', name: 'About', component: About},
  
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
  scrollBehavior(to, from, savedPosition) {
   
    return { top: 0 }
  }
});

export default router;
