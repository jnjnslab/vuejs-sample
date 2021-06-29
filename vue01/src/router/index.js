import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Event from '../views/Event.vue'
import Form01 from '../views/Form01.vue'
import Form02 from '../views/Form02.vue'
import Cond01 from '../views/Cond01.vue'
import Cond02 from '../views/Cond02.vue'
import Cond03 from '../views/Cond03.vue'
import Cond04 from '../views/Cond04.vue'
import Cond05 from '../views/Cond05.vue'
import Cond06 from '../views/Cond06.vue'
import Vuex01 from '../views/Vuex01.vue'
import Article from '../views/Article.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/event',
    name: 'Event',
    component: Event
  },
  {
    path: '/form01',
    name: 'Form01',
    component: Form01
  },
  {
    path: '/form02',
    name: 'Form02',
    component: Form02
  },
  {
    path: '/cond01',
    name: 'Cond01',
    component: Cond01
  },
  {
    path: '/cond02',
    name: 'Cond02',
    component: Cond02
  },
  {
    path: '/cond03',
    name: 'Cond03',
    component: Cond03
  },
  {
    path: '/cond04',
    name: 'Cond04',
    component: Cond04
  },
  {
    path: '/cond05',
    name: 'Cond05',
    component: Cond05
  },
  {
    path: '/cond06',
    name: 'Cond06',
    component: Cond06
  },
  {
    path: '/vuex01',
    name: 'Vuex01',
    component: Vuex01
  },
  {
    path: '/article/:id',
    // path: '/article/:id?',
    // path: '/article/:id*',
    // path: '/article/:id(\\d{1,3})',
    name: 'Article',
    component: Article,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
