<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
      <div class="container">
        <div class="navbar-header">
          <div class="navbar-brand">
            <object id="icono" :data="urquizaSvg" type="image/svg+xml"></object>
          </div>
        </div>
        <button
          class="navbar-toggler"
          id="toggle-color-navbar"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul class="nav navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" to data-toggle="dropdown">Institucional</router-link>
              <div class="dropdown-menu">
                <router-link
                  v-for="({description, url}, idx) of getPagesPublished(getPagesInstitutional('INSTITUCIONAL'))"
                  :key="idx"
                  class="dropdown-item"
                  :to="{ name: 'Institutional', params: { instPage: url }}"
                >{{ description }}</router-link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" to data-toggle="dropdown">Ingresantes</router-link>
              <div class="dropdown-menu">
                <router-link
                  v-for="({description, url}, idx) of getPagesPublished(getPagesInstitutional('INGRESANTES'))"
                  :key="idx"
                  class="dropdown-item"
                  :to="{ name: 'Entrants', params: { entrantsPage: url }}"
                >{{ description }}</router-link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" to data-toggle="dropdown">Carreras</router-link>
              <div class="dropdown-menu">
                <router-link
                  v-for="({description, url}, idx) of getPagesPublished(getCareersInState)"
                  :key="idx"
                  class="dropdown-item"
                  :to="{ name: 'Careers', params: { careersPage: url }}"
                >{{ description }}</router-link>
              </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/#consultas">Contacto</router-link>
            </li>
          </ul>
          <div class="left">
            <router-link class="btn btn-outline-light waves-effect mt-2" to="/preinscribirse">
              Preinscribirse
              <i class="fas fa-sign-in-alt"></i>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { labeledStatement } from "babel-types";

export default {
  name: "Menu",
  computed: {
    ...mapGetters([
      "getPagesInstitutional",
      "getPagesEntrant",
      "getCareersInState"
    ])
  },
  async created() {
    await this.getPages();
  },
  data() {
    return {
      urquizaSvg: require("@/assets/Urquiza_Icon.svg")
    };
  },
  methods: {
    ...mapActions(["getPages"]),

    getPagesPublished(pages) {
      return pages.filter(page => page.published);
    }
  }
};

$(document).ready(function() {
  // Agrega el color al nav colapse al apretar el boton de colapse
  $("#toggle-color-navbar").click(function() {
    $(".navbar").toggleClass("color-onClick-menu");
  });
  // Se colorea el nav al bajar 120px de scroll
  $(window).scroll(function() {
    if ($("nav").offset().top > 120) {
      $("nav").addClass("navbar-after-scroll");
    } else {
      $("nav").removeClass("navbar-after-scroll");
    }
  });
});
</script>

<style lang="css" scoped>
@import "../../public/css/style.css";
</style>