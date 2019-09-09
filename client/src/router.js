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
const SuperUserSignIn = () => import( /* webpackChunkName: "SuperUserSignIn" */ './views/SU/SuperUserSignIn.vue')
const Dashboard = () => import( /* webpackChunkName: "Dashboard" */ './views/dashboard/Dashboard.vue')
const Pages = () => import( /* webpackChunkName: "Pages" */ './views/dashboard/Pages.vue')
const NewsInDashboard = () => import( /* webpackChunkName: "NewsInDashboard" */ './views/dashboard/NewsInDashboard.vue')
const EntrantsInDashboard = () => import( /* webpackChunkName: "EntrantsInDashboard" */ './views/dashboard/EntrantsInDashboard.vue')
const Students = () => import( /* webpackChuckName: "Studenet" */ './views/dashboard/Students.vue')
const Page = () => import( /* webpackChuckName: "Page" */ './views/dashboard/Page.vue')
const PageEdit = () => import( /* webpackChuckName: "PageEdit" */ './views/dashboard/EditPageAndNews.vue')
const NewInDashboard = () => import( /* webpackChuckName: "NewInDashboard" */ './views/dashboard/NewInDashboard.vue')
const NewEdit = () => import( /* webpackChuckName: "NewEdit" */ './views/dashboard/EditPageAndNews.vue')
const Entrant = () => import( /* webpackChuckName: "Entrant" */ './views/dashboard/Entrant.vue')
const EntrantEdit = () => import( /* webpackChuckName: "EntrantEdit" */ './views/dashboard/EditEntrantsAndStudents.vue')
const Student = () => import( /* webpackChuckName: "Student" */ './views/dashboard/Student.vue')
const StudentEdit = () => import( /* webpackChuckName: "StudentEdit" */ './views/dashboard/EditEntrantsAndStudents.vue')

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
    if (to.name === "Panel")
      return window.scrollTo({
        top: 0,
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
      name: 'Inicio',
      component: Home,
      children: [{
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
      name: 'SU',
      component: SuperUserSignIn,
      meta: {
        guest: true
      }
    },
    {
      path: '/panel',
      name: 'Panel',
      component: Dashboard,
      meta: {
        requiresAuth: true,
        is_admin: true
      },
      children: [{
          path: '/panel/paginas',
          name: 'Pages',
          component: Pages
        },
        {
          path: '/panel/paginas/:id',
          name: 'Page',
          component: Page,
          children: [{
            path: '/panel/paginas/:id/modificar',
            name: 'PageEdit',
            component: PageEdit
          }]
        },
        {
          path: '/panel/novedades',
          name: 'NewsInDashboard',
          component: NewsInDashboard
        },
        {
          path: '/panel/novedades/:id',
          name: 'NewInDashboard',
          component: NewInDashboard,
          children: [{
            path: '/panel/novedades/:id/modificar',
            name: 'NewEdit',
            component: NewEdit
          }]
        },
        {
          path: '/panel/aspirantes',
          name: 'EntrantsInDashboard',
          component: EntrantsInDashboard
        },
        {
          path: '/panel/aspirante/:id',
          name: 'Entrant',
          component: Entrant,
          children: [{
            path: '/panel/aspirante/:id/modificar',
            name: 'EntrantEdit',
            component: EntrantEdit
          }]
        },
        {
          path: '/panel/alumnos',
          name: 'Students',
          component: Students
        },
        {
          path: '/panel/alumno/:id',
          name: 'Student',
          component: Student,
          children: [{
            path: '/panel/alumno/:id/modificar',
            name: 'StudentEdit',
            component: StudentEdit
          }]
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
})