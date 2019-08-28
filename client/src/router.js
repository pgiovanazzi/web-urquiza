import Vue from 'vue'
import Router from 'vue-router'
import {
  throwStatement
} from 'babel-types';

Vue.use(Router)

const Home = () => import( /* webpackChunkName: "inicio" */ './views/main/Inicio.vue')
const News = () => import( /* webpackChunkName: "inicio/novedades" */ './views/main/Novedades.vue')
const Institutional = () => import( /* webpackChunkName: "institutional" */ './views/main/Institutional.vue')
const Entrants = () => import( /* webpackChunkName: "entrants" */ './views/main/Entrants.vue')
const Careers = () => import( /* webpackChunkName: "careers" */ './views/main/Careers.vue')
const Preinscription = () => import( /* webpackChunkName: "preinscribirse" */ './views/preinscribirse/Preinscribirse.vue')
const SuperUserSignIn = () => import( /* webpackChunkName: "preinscribirse" */ './views/SU/SuperUserSignIn.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  fallback: false,
  scrollBehavior: to => {
    if (to.hash)
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop,
        behavior: 'smooth'
      });
    if (to.name === "novedades")
      return window.scrollTo({
        top: 1500,
        behavior: 'smooth'
      })
    if (to.path != "/preinscribirse")
      return window.scrollTo({
        top: 500,
        behavior: 'smooth'
      })
    return window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  },
  routes: [{
      path: '/',
      name: 'inicio',
      component: Home,
      children: [{
        path: '/novedades',
        name: 'novedad',
        component: News,
        path: '/novedades/:id',
        name: 'novedades',
        component: News
      }]
    },
    {
      path: '/institucional/:instPage',
      name: 'Institutional',
      component: Institutional,
    },
    {
      path: '/ingresantes/:entrantsPage',
      name: 'Entrants',
      component: Entrants,
    },
    {
      path: '/carreras/:careersPage',
      name: 'Careers',
      component: Careers,
    },
    {
      path: '/preinscribirse',
      name: 'preinscribirse',
      component: Preinscription
    },
    {
      path: '/su',
      name: 'su',
      component: SuperUserSignIn
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
})