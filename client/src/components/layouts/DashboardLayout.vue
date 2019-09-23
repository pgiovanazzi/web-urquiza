<template>
  <div>
    <div class="row mx-0">
      <!-- Grid column -->
      <CreateContent />
      <div class="col-sm-2 px-1 blue-grey lighten-5 z-depth-1-half">
        <div class="py-2 sticky-top flex-grow-1">
          <div class="nav flex-sm-column mx-4">
            <router-link to="/" class="nav-link d-none d-sm-inline">TERCIARIO URQUIZA</router-link>
            <hr class="m-1 mb-4" />
            <router-link
              class="nav-link"
              data-target="#createContent"
              data-toggle="modal"
              to="/panel/novedades"
            >
              <i class="fas fa-external-link-alt"></i> Crear nueva novedad
            </router-link>

            <router-link
              class="nav-link"
              data-target="#createContent"
              data-toggle="modal"
              to="/panel/paginas"
            >
              <i class="fas fa-external-link-alt"></i> Crear nueva página
            </router-link>

            <router-link
              class="nav-link"
              v-for="(option, idx) of quickAccessOptios 
            "
              :key="idx"
              :to="option.path"
            >
              <i class="fas fa-external-link-alt"></i>
              {{ option.name }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-10 p-0">
        <nav class="mb-1 navbar navbar-expand-lg navbar-dark">
          <router-link class="navbar-brand" to="/panel">PANEL DE ADMINISTRACIÓN DEL SITIO</router-link>
          <ul class="navbar-nav ml-auto nav-flex-icons mx-4">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-333"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-user"></i>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right dropdown-default"
                aria-labelledby="navbarDropdownMenuLink-333"
              >
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cog"></i> Configuración
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-sign-out-alt"></i> Cerrar Sesión
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <!--/.Navbar -->

        <div class="container views">
          <div class="row">
            <div class="col-md-12">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import CreateContent from "@/components/dashboard/CreateContent.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "DashboardLayout",
  components: {
    Footer,
    CreateContent
  },
  data() {
    return {
      quickAccessOptios: [
        {
          name: "Buscar aspirantes",
          path: "/panel/buscar-aspirantes"
        },
        {
          name: "Buscar alumnos",
          path: "/panel/buscar-alumnos"
        }
      ]
    };
  }
};
</script>

<style scoped>
.navbar {
  background: #1f405c !important;
}

.bc-icons-2 .breadcrumb-item + .breadcrumb-item::before {
  content: none;
}
.bc-icons-2 .breadcrumb-item.active {
  color: #455a64;
}
a {
  color: rgb(31, 64, 92);
}
a:hover {
  color: #6096cc;
}
.views {
  margin-bottom: 90px;
}
</style>