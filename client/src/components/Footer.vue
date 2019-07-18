<template>
  <!-- Footer -->
  <footer class="page-footer font-small">
    <!-- Footer Links -->
    <div class="container">
      <div class="classic-tabs">
        <ul class="nav nav-justified pt-3" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active border border-0 text-uppercase font-weight-bold"
              id="careers-tab"
              data-toggle="tab"
              href="#careers"
              role="tab"
              aria-controls="careers"
              aria-selected="true"
            >Carreras</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link border border-0 text-uppercase font-weight-bold"
              id="academic-tab"
              data-toggle="tab"
              href="#academic"
              role="tab"
              aria-controls="academic"
              aria-selected="false"
            >Secretaría académica</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link border border-0 text-uppercase font-weight-bold"
              id="FAQ-tab"
              data-toggle="tab"
              href="#FAQ"
              role="tab"
              aria-controls="FAQ"
              aria-selected="false"
            >Preguntas frecuentes</a>
          </li>
        </ul>

        <div class="tab-content m-3" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="careers"
            role="tabpanel"
            aria-labelledby="careers-tab"
          >
            <ul v-for="(career,idx) of careers" :key="idx">
              <li>{{ career.name }}</li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="academic"
            role="tabpanel"
            aria-labelledby="academic-tab"
          >{{ secretariaAcademica }}</div>
          <div class="tab-pane fade" id="FAQ" role="tabpanel" aria-labelledby="FAQ-tab">
            <ul v-for="(pregFrec, idx) of pregFrecs" :key="idx">
              <li>
                {{ pregFrec.preg }} - {{pregFrec.resp}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Grid row-->
      <hr class="clearfix d-md-none rgba-white-light" style="margin: 10% 15% 5%;" />

      <!-- Grid row-->
      <div class="row pb-3">
        <!-- Grid column -->
        <div class="col-md-12">
          <div class="mb-5 flex-center">
            <!-- Facebook -->
            <a class="fb-ic">
              <i class="fab fa-facebook-f fa-lg white-text mr-4"></i>
            </a>
            <!-- Twitter -->
            <a class="tw-ic">
              <i class="fab fa-twitter fa-lg white-text mr-4"></i>
            </a>
            <!--Linkedin -->
            <a class="li-ic">
              <i class="fab fa-linkedin-in fa-lg white-text mr-4"></i>
            </a>
            <!--Instagram-->
            <a class="ins-ic">
              <i class="fab fa-instagram fa-lg white-text mr-4"></i>
            </a>
          </div>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row-->
    </div>
    <!-- Footer Links -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">
      Web application designed by
      <a href="https://linkedin.com/in/paulo-giovanazzi">Paulo</a> and
      <a href="https://linkedin.com/in/ivanog">Iván</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>


<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Footer",
  data() {
    return {
      secretariaAcademica:
        "La secretaría académica brinda atención a los alumnos los dias de Lunes a Viernes de 20 a 22 hs en bedelía - 1º piso - Nivel Terciario Bv. Oroño 690 - Rosario",
      pregFrecs: [
        {
          preg: "¿Qué es un Analista Funcional?",
          resp: "..."
        },
        {
          preg: "¿Qué es ITI?",
          resp: "..."
        },
        {
          preg: "¿Qué es un Desarrollador de Software?",
          resp: "..."
        },
        {
          preg: "Tengo estudios en la universidad, ¿puedo homologar materias?",
          resp: "..."
        },
        {
          preg: "Cuando termine esta carrera, ¿puedo seguir en la universidad?",
          resp: "..."
        },
        {
          preg: "Debo materias del secundario, ¿puedo inscribirme igual?",
          resp: "..."
        }
      ]
    };
  },
  created() {
    this.getCareers()
  },
  computed: {
    ...mapState(["careers"])
  },
  methods: {
    ...mapActions(["getCareers"])
  },
};
</script>

<style scoped>
.page-footer {
  background-color: rgb(16, 45, 70);
}
footer {
  box-shadow: 0px -2px 10px rgba(32, 32, 32, 0.678);
  position: relative;
	z-index: 3;
}
</style>
