import { createRouter, createWebHistory } from 'vue-router';

// Importa tus componentes
import HomePage from '../views/HomePage.vue';
import MoviesPage from '../views/MoviesPage.vue'
import SeriesPage from '../views/SeriesPage.vue'
import NovedadesPage from '../views/NovedadesPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/admin/movies',
    name: 'MoviesPage',
    component: MoviesPage
  },
  {
    path: '/admin/series',
    name: 'SeriesPage',
    component: SeriesPage
  },
  {
    path: '/admin/novedades',
    name: 'NovedadesPage',
    component: NovedadesPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
