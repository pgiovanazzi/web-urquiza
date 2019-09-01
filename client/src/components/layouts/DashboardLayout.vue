<template>
  <div>
    <div class="row mx-0">
      <!-- Grid column -->
      <div class="col-sm-2 px-1 blue-grey lighten-5 z-depth-1-half">
        <div class="py-2 sticky-top flex-grow-1">
          <div class="nav flex-sm-column mx-4">
            <router-link to="/" class="nav-link d-none d-sm-inline">TERCIARIO URQUIZA</router-link>
            <hr class="m-1 mb-4" />
            <router-link class="nav-link" v-for="option of quickAccessOptios 
            " :key="option" :to="option.path">
              <i class="fas fa-external-link-alt"></i> {{ option.name }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-10 p-0">
        <nav class="mb-1 navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href="#">PANEL DE ADMINISTRACIÓN DEL SITIO</a>
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

        <div class="container mb-5">
          <div class="bc-icons-2 mt-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb lighten-4">
                <li class="breadcrumb-item">
                  <a class="black-text" href="#">Home</a>
                  <i class="fas fa-caret-right mx-2" aria-hidden="true"></i>
                </li>
                <li class="breadcrumb-item">
                  <a class="black-text" href="#">Library</a>
                  <i class="fas fa-caret-right mx-2" aria-hidden="true"></i>
                </li>
                <li class="breadcrumb-item active">Data</li>
              </ol>
            </nav>
          </div>

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
import Footer from "@/components/Footer.vue";

export default {
  name: "DashboardLayout",
  components: {
    Footer
  },
  data() {
    return {
      quickAccessOptios: [
        {
          name: "Crear nueva Novedad",
          path: "/panel/nueva-novedad"
        },
        {
          name: "Crear nueva Página",
          path: "/panel/nueva-pagina"
        },
        {
          name: "Buscar Aspirantes",
          path: "/panel/buscar-aspirantes"
        },
        {
          name: "Buscar Alumnos",
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
</style>