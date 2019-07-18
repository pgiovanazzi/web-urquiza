import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'inicio',
      component: () => import( /* webpackChunkName: "inicio" */ './views/Inicio.vue')
    },
    {
      path: '/nuestra-historia',
      name: 'historia',
      component: () => import( /* webpackChunkName: "historia" */ './views/Historia.vue')
    },
    {
      path: '/sedes',
      name: 'sedes',
      component: () => import( /* webpackChunkName: "sedes" */ './views/Sedes.vue')
    },
    {
      path: '/autoridades',
      name: 'autoridades',
      component: () => import( /* webpackChunkName: "autoridades" */ './views/Autoridades.vue')
    },
    {
      path: '/biblioteca',
      name: 'biblioteca',
      component: () => import( /* webpackChunkName: "biblioteca" */ './views/Biblioteca.vue')
    },
    {
      path: '/asociacion-cooperadora',
      name: 'cooperadora',
      component: () => import( /* webpackChunkName: "cooperadora" */ './views/Cooperadora.vue')
    },
    {
      path: '/informacion-ingresantes',
      name: 'ingresantes',
      component: () => import( /* webpackChunkName: "history" */ './views/Ingresantes.vue')
    },
    {
      path: '/cursos-ingreso',
      name: 'cursoIngreso',
      component: () => import( /* webpackChunkName: "history" */ './views/CursoIngreso.vue')
    },
    {
      path: '/analisis-funcional',
      name: 'analisisFuncional',
      component: () => import( /* webpackChunkName: "history" */ './views/AnalisisFuncional.vue')
    },
    {
      path: '/infraestructura-de-tecnologia-de-la-informacion',
      name: 'iti',
      component: () => import( /* webpackChunkName: "iti" */ './views/ITI.vue')
    },
    {
      path: '/desarrollo-de-software',
      name: 'desarrolloSoftware',
      component: () => import( /* webpackChunkName: "iti" */ './views/DesarrolloSoftware.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition
    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop,
        behavior: 'smooth'
      });
    }
    return window.scrollTo({
      top: 500,
      behavior: 'smooth'
    })
  }
})