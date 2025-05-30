import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import About from '../views/About.vue';
import WPL1 from '../views/WPL1.vue';
import WPL2 from '../views/WPL2.vue';
import Landbouw from '../views/Landbouw.vue';
import EigenWerk from '../views/EigenWerk.vue';



const routes = [
  { path: '/', name: 'Home', component: Home }, 
  { path: '/Projects', name: 'Projects', component: Projects},
  { path: '/About', name: 'About', component: About},
  { path: '/WPL1', name: 'WPL1', component: WPL1},
  { path: '/WPL2', name: 'WPL2', component: WPL2},
  { path: '/Landbouw', name: 'Landbouw', component: Landbouw},
  { path: '/EigenWerk', name: 'Eigenwerk', component: EigenWerk},

  
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
  scrollBehavior(to, from, savedPosition) {
   
    return { top: 0 }
  }
});

export default router;
