import Vue from 'vue'
import Router from 'vue-router'
import {
  throwStatement
} from 'babel-types';

Vue.use(Router)

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
      component: () => import( /* webpackChunkName: "inicio" */ './views/main/Inicio.vue'),
      children: [{
        path: '/novedades',
        name: 'novedad',
        component: () => import( /* webpackChunkName: "inicio/novedades" */ './views/main/Novedades.vue'),
        path: '/novedades/:id',
        name: 'novedades',
        component: () => import( /* webpackChunkName: "inicio/novedades" */ './views/main/Novedades.vue')
      }]
    },
    {
      path: '/institucional/:instPage',
      name: 'Institutional',
      component: () => import( /* webpackChunkName: "institutional" */ './views/main/Institutional.vue'),
    },
    {
      path: '/ingresantes/:entrantsPage',
      name: 'Entrants',
      component: () => import( /* webpackChunkName: "entrants" */ './views/main/Entrants.vue'),
    },
    {
      path: '/carreras/:careersPage',
      name: 'Careers',
      component: () => import( /* webpackChunkName: "careers" */ './views/main/Careers.vue'),
    },
    {
      path: '/preinscribirse',
      name: 'preinscribirse',
      component: () => import( /* webpackChunkName: "preinscribirse" */ './views/preinscribirse/Preinscribirse.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition)
  //     return savedPosition
  //   if (to.hash) {
  //     return window.scrollTo({
  //       top: document.querySelector(to.hash).offsetTop,
  //       behavior: 'smooth'
  //     });
  //   }
  //   return window.scrollTo({
  //     top: 500,
  //     behavior: 'smooth'
  //   })
  // }
})