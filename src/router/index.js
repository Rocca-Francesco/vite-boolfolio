import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue';
import ProjectsListPage from '../pages/ProjectsListPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage,
    },
    {
      path: '/projects-list',
      name: 'projects-list',
      component: ProjectsListPage,
    },
  ]
});

export { router };