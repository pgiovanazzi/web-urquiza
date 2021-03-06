import Vue from "vue";
import Router from "vue-router";
import { throwStatement } from "babel-types";

Vue.use(Router);

const Home = () =>
  import(/* webpackChunkName: "inicio" */ "./views/main/Inicio.vue");
const News = () =>
  import(
    /* webpackChunkName: "inicio/novedades" */ "./views/main/Novedades.vue"
  );
const Institutional = () =>
  import(
    /* webpackChunkName: "institutional" */ "./views/main/Institutional.vue"
  );
const Entrants = () =>
  import(/* webpackChunkName: "entrants" */ "./views/main/Entrants.vue");
const Careers = () =>
  import(/* webpackChunkName: "careers" */ "./views/main/Careers.vue");
const Preinscription = () =>
  import(
    /* webpackChunkName: "preinscribirse" */ "./views/preinscribirse/Preinscribirse.vue"
  );
const SuperUserSignIn = () =>
  import(
    /* webpackChunkName: "SuperUserSignIn" */ "./views/SU/SuperUserSignIn.vue"
  );
const Dashboard = () =>
  import(/* webpackChunkName: "Dashboard" */ "./views/dashboard/Dashboard.vue");
const Pages = () =>
  import(/* webpackChunkName: "Pages" */ "./views/dashboard/Pages.vue");
const NewsInDashboard = () =>
  import(
    /* webpackChunkName: "NewsInDashboard" */ "./views/dashboard/NewsInDashboard.vue"
  );
const EntrantsInDashboard = () =>
  import(
    /* webpackChunkName: "EntrantsInDashboard" */ "./views/dashboard/EntrantsInDashboard.vue"
  );
const Students = () =>
  import(/* webpackChuckName: "Studenet" */ "./views/dashboard/Students.vue");
const Page = () =>
  import(/* webpackChuckName: "Page" */ "./views/dashboard/Page.vue");
const PageEdit = () =>
  import(
    /* webpackChuckName: "PageEdit" */ "./views/dashboard/EditPageAndNews.vue"
  );
const NewInDashboard = () =>
  import(
    /* webpackChuckName: "NewInDashboard" */ "./views/dashboard/NewInDashboard.vue"
  );
const NewEdit = () =>
  import(
    /* webpackChuckName: "NewEdit" */ "./views/dashboard/EditPageAndNews.vue"
  );
const Entrant = () =>
  import(/* webpackChuckName: "Entrant" */ "./views/dashboard/Entrant.vue");
const EntrantEdit = () =>
  import(
    /* webpackChuckName: "EntrantEdit" */ "./views/dashboard/EditEntrantsAndStudents.vue"
  );
const Student = () =>
  import(/* webpackChuckName: "Student" */ "./views/dashboard/Student.vue");
const StudentEdit = () =>
  import(
    /* webpackChuckName: "StudentEdit" */ "./views/dashboard/EditEntrantsAndStudents.vue"
  );
const ConfigInstitute = () =>
  import(
    /* webpackChuckName: "ConfigInstitute" */ "./views/dashboard/ConfigInstitute.vue"
  );

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  fallback: false,
  scrollBehavior: (to, from) => {
    if (to.hash)
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop,
        behavior: "smooth"
      });

    if (to.name === "novedades")
      return window.scrollTo({
        top: 1500,
        behavior: "smooth"
      });

    if (to.path === "/panel")
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    if (from.path === "/panel/novedades")
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    if (to.name === "NewInDashboard")
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    if (from.name === "NewInDashboard")
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    if (to.path === "/panel/paginas")
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    if (from.path === "/panel/paginas")
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    if (to.name === "Page")
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    if (from.name === "Page")
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    if (to.path === "/panel/aspirantes")
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    if (from.path === "/panel/aspirantes")
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    if (to.name === "EntrantEdit")
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    if (from.name === "EntrantEdit")
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    if (to.path === "/panel/alumnos")
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    if (from.path === "/panel/alumnos")
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    if (to.name === "StudentEdit")
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    if (from.name === "StudentEdit")
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    if (to.path === "/panel/configuracion") {
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    if (to.path != "/preinscribirse")
      return window.scrollTo({
        top: 500,
        behavior: "smooth"
      });

    return window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  },
  routes: [
    {
      path: "/",
      name: "Inicio",
      component: Home,
      children: [
        {
          path: "/novedades/:id",
          name: "novedades",
          component: News
        }
      ]
    },
    {
      path: "/institucional/:instPage",
      name: "Institutional",
      component: Institutional
    },
    {
      path: "/ingresantes/:entrantsPage",
      name: "Entrants",
      component: Entrants
    },
    {
      path: "/carreras/:careersPage",
      name: "Careers",
      component: Careers
    },
    {
      path: "/preinscribirse",
      name: "preinscribirse",
      component: Preinscription
    },
    {
      path: "/su",
      name: "SU",
      component: SuperUserSignIn,
      meta: {
        guest: true
      }
    },
    {
      path: "/panel",
      name: "Panel",
      component: Dashboard,
      meta: {
        requiresAuth: true,
        is_admin: true,
        breadcrumb: [
          {
            name: "Panel",
            isDynamicParam: false
          }
        ]
      },
      children: [
        {
          path: "/panel/paginas",
          name: "Pages",
          component: Pages,
          meta: {
            breadcrumb: [
              {
                name: "Panel",
                link: "/panel",
                isDynamicParam: false
              },
              {
                name: "Paginas",
                isDynamicParam: false
              }
            ]
          }
        },
        {
          path: "/panel/paginas/:id",
          name: "Page",
          component: Page,
          meta: {
            breadcrumb: [
              {
                name: "Panel",
                link: "/panel",
                isDynamicParam: false
              },
              {
                name: "Paginas",
                link: "/panel/paginas",
                isDynamicParam: false
              },
              {
                name: alias => alias,
                isDynamicParam: true
              }
            ]
          },
          children: [
            {
              path: "/panel/paginas/:id/modificar",
              name: "PageEdit",
              component: PageEdit,
              meta: {
                breadcrumb: [
                  {
                    name: "Panel",
                    link: "/panel",
                    isDynamicParam: false
                  },
                  {
                    name: "Paginas",
                    link: "/panel/paginas",
                    isDynamicParam: false
                  },
                  {
                    name: alias => alias,
                    link: alias => `/panel/paginas/${alias}`,
                    isDynamicParam: true
                  },
                  {
                    name: "Modificar",
                    isDynamicParam: false
                  }
                ]
              }
            }
          ]
        },
        {
          path: "/panel/novedades",
          name: "NewsInDashboard",
          component: NewsInDashboard,
          meta: {
            breadcrumb: [
              {
                name: "Panel",
                link: "/panel",
                isDynamicParam: false
              },
              {
                name: "Novedades",
                isDynamicParam: false
              }
            ]
          }
        },
        {
          path: "/panel/novedades/:id",
          name: "NewInDashboard",
          component: NewInDashboard,
          meta: {
            breadcrumb: [
              {
                name: "Panel",
                link: "/panel",
                isDynamicParam: false
              },
              {
                name: "Novedades",
                link: "/panel/novedades",
                isDynamicParam: false
              },
              {
                name: alias => alias,
                isDynamicParam: true
              }
            ]
          },
          children: [
            {
              path: "/panel/novedades/:id/modificar",
              name: "NewEdit",
              component: NewEdit,
              meta: {
                breadcrumb: [
                  {
                    name: "Panel",
                    link: "/panel",
                    isDynamicParam: false
                  },
                  {
                    name: "Novedades",
                    link: "/panel/novedades",
                    isDynamicParam: false
                  },
                  {
                    name: alias => alias,
                    link: alias => `/panel/novedades/${alias}`,
                    isDynamicParam: true
                  },
                  {
                    name: "Modificar",
                    isDynamicParam: false
                  }
                ]
              }
            }
          ]
        },
        {
          path: "/panel/aspirantes",
          name: "EntrantsInDashboard",
          component: EntrantsInDashboard,
          meta: {
            breadcrumb: [
              {
                name: "Panel",
                link: "/panel",
                isDynamicParam: false
              },
              {
                name: "Aspirantes",
                isDynamicParam: false
              }
            ]
          }
        },
        {
          path: "/panel/aspirante/:id",
          name: "Entrant",
          component: Entrant,
          meta: {
            breadcrumb: [
              {
                name: "Panel",
                link: "/panel",
                isDynamicParam: false
              },
              {
                name: "Aspirantes",
                link: "/panel/aspirantes",
                isDynamicParam: false
              },
              {
                name: alias => alias,
                isDynamicParam: true
              }
            ]
          },
          children: [
            {
              path: "/panel/aspirante/:id/modificar",
              name: "EntrantEdit",
              component: EntrantEdit,
              meta: {
                breadcrumb: [
                  {
                    name: "Panel",
                    link: "/panel",
                    isDynamicParam: false
                  },
                  {
                    name: "Aspirantes",
                    link: "/panel/aspirantes",
                    isDynamicParam: false
                  },
                  {
                    name: alias => alias,
                    link: alias => `/panel/aspirante/${alias}`,
                    isDynamicParam: true
                  },
                  {
                    name: "Modificar",
                    isDynamicParam: false
                  }
                ]
              }
            }
          ]
        },
        {
          path: "/panel/alumnos",
          name: "Students",
          component: Students,
          meta: {
            breadcrumb: [
              {
                name: "Panel",
                link: "/panel",
                isDynamicParam: false
              },
              {
                name: "Alumnos",
                isDynamicParam: false
              }
            ]
          }
        },
        {
          path: "/panel/alumno/:id",
          name: "Student",
          component: Student,
          meta: {
            breadcrumb: [
              {
                name: "Panel",
                link: "/panel",
                isDynamicParam: false
              },
              {
                name: "Alumnos",
                link: "/panel/alumnos",
                isDynamicParam: false
              },
              {
                name: alias => alias,
                isDynamicParam: true
              }
            ]
          },
          children: [
            {
              path: "/panel/alumno/:id/modificar",
              name: "StudentEdit",
              component: StudentEdit,
              meta: {
                breadcrumb: [
                  {
                    name: "Panel",
                    link: "/panel",
                    isDynamicParam: false
                  },
                  {
                    name: "Alumnos",
                    link: "/panel/alumnos",
                    isDynamicParam: false
                  },
                  {
                    name: alias => alias,
                    link: alias => `/panel/alumno/${alias}`,
                    isDynamicParam: true
                  },
                  {
                    name: "Modificar",
                    isDynamicParam: false
                  }
                ]
              }
            }
          ]
        },
        {
          path: "/panel/configuracion",
          name: "ConfigInstitute",
          component: ConfigInstitute,
          meta: {
            breadcrumb: [
              {
                name: "Panel",
                link: "/panel",
                isDynamicParam: false
              },
              {
                name: "Configuraci??n",
                isDynamicParam: false
              }
            ]
          }
        }
      ]
    },

    {
      path: "*",
      redirect: "/"
    }
  ]
});
