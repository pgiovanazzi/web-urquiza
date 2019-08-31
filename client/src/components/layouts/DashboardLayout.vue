<template>
  <div>
    <div class="row mx-0">
      <!-- Grid column -->
      <div class="col-sm-2 px-1 blue-grey lighten-5 z-depth-1-half">
        <div class="py-2 sticky-top flex-grow-1">
          <div class="nav flex-sm-column mx-4">
            <a href class="nav-link d-none d-sm-inline">TERCIARIO URQUIZA</a>
            <hr class="m-0" />
            <a href class="nav-link">Link</a>
            <a href class="nav-link">Link</a>
            <a href class="nav-link">Link</a>
            <a href class="nav-link">Link</a>
            <a href class="nav-link">Link</a>
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
                <a class="dropdown-item" href="#">Configuración</a>
                <a class="dropdown-item" href="#">Cerrar Sesion</a>
              </div>
            </li>
          </ul>
        </nav>
        <!--/.Navbar -->

        <div class="container mb-5">
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
  }
};
</script>

<style scoped>
.navbar {
  background: #1f405c !important;
}
</style>