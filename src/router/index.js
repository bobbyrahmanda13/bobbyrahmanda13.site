import { createRouter, createWebHistory } from 'vue-router';

// import Home from '@/views/Home.vue';
const Home = () => import('@/views/Home.vue');
const Project = () => import('@/views/Project.vue');
const About = () => import('@/views/About.vue');

const routes = [
  {
    name: 'home',
    path: '/', // example.com/
    component: Home,
  },
  {
    name: 'project',
    path: '/project', // example.com/
    component: Project,
  },
  {
    name: 'about',
    path: '/about', // example.com/
    component: About,
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'text-primary',
});
export default router;
