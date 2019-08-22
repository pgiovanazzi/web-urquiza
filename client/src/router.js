import Vue from 'vue'
import Router from 'vue-router'
import {
  throwStatement
} from 'babel-types';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
      path: '/nuestra-historia',
      name: 'historia',
      component: () => import( /* webpackChunkName: "historia" */ './views/main/Historia.vue')
    },
    {
      path: '/sedes',
      name: 'sedes',
      component: () => import( /* webpackChunkName: "sedes" */ './views/main/Sedes.vue')
    },
    {
      path: '/autoridades',
      name: 'autoridades',
      component: () => import( /* webpackChunkName: "autoridades" */ './views/main/Autoridades.vue')
    },
    {
      path: '/biblioteca',
      name: 'biblioteca',
      component: () => import( /* webpackChunkName: "biblioteca" */ './views/main/Biblioteca.vue')
    },
    {
      path: '/asociacion-cooperadora',
      name: 'cooperadora',
      component: () => import( /* webpackChunkName: "cooperadora" */ './views/main/Cooperadora.vue')
    },
    {
      path: '/informacion-ingresantes',
      name: 'ingresantes',
      component: () => import( /* webpackChunkName: "history" */ './views/main/Ingresantes.vue')
    },
    {
      path: '/cursos-ingreso',
      name: 'cursoIngreso',
      component: () => import( /* webpackChunkName: "history" */ './views/main/CursoIngreso.vue')
    },
    {
      path: '/analisis-funcional',
      name: 'analisisFuncional',
      component: () => import( /* webpackChunkName: "history" */ './views/main/AnalisisFuncional.vue')
    },
    {
      path: '/infraestructura-de-tecnologia-de-la-informacion',
      name: 'iti',
      component: () => import( /* webpackChunkName: "iti" */ './views/main/ITI.vue')
    },
    {
      path: '/desarrollo-de-software',
      name: 'desarrolloSoftware',
      component: () => import( /* webpackChunkName: "desarrollo de softare" */ './views/main/DesarrolloSoftware.vue')
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