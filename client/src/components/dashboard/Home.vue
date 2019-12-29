<template>
  <div>
    <div class="row">
      <div class="col-md-6 col-sm-12 mb-3">
        <!-- Card -->
        <div class="card hoverable">
          <router-link to="/panel/paginas">
            <!-- Card content -->
            <div class="card-body">
              <!-- Title -->
              <center>
                <h3 class="card-title">
                  <a>Páginas</a>
                </h3>
                <span style="font-size: 5rem">
                  <i class="far fa-file-alt"></i>
                  {{ getPagesAmount }}
                </span>
                <!-- Text -->
                <p class="card-text">Vea, cree, modifique y elimine páginas.</p>
              </center>
            </div>
          </router-link>
        </div>
        <!-- Card -->
      </div>
      <div class="col-md-6 col-sm-12">
        <!-- Card -->
        <!-- Card content -->
        <div class="card hoverable">
          <router-link to="/panel/novedades">
            <div class="card-body">
              <!-- Title -->
              <center>
                <h3 class="card-title">
                  <a>Novedades</a>
                </h3>
                <span style="font-size: 5rem">
                  <i class="far fa-newspaper"></i>
                  {{ getPostsAmount }}
                </span>
                <!-- Text -->
                <p class="card-text">
                  Vea, cree, modifique y elimine las novedades.
                </p>
              </center>
            </div>
          </router-link>
        </div>
        <!-- Card -->
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6 col-sm-12 mb-3">
        <!-- Card -->
        <div class="card hoverable">
          <router-link to="/panel/aspirantes">
            <!-- Card content -->
            <div class="card-body">
              <!-- Title -->
              <center>
                <h3 class="card-title">
                  <a>Aspirantes</a>
                </h3>
                <span style="font-size: 5rem">
                  <i class="fas fa-users"></i>
                  {{ getAspirantsAmount }}
                </span>
                <p class="card-text">
                  Vea, modifique, elimine y dé de alta a los aspirantes.
                </p>
              </center>
            </div>
          </router-link>
        </div>
        <!-- Card -->
      </div>
      <div class="col-md-6 col-sm-12">
        <!-- Card -->
        <div class="card hoverable">
          <router-link to="/panel/alumnos">
            <!-- Card content -->
            <div class="card-body">
              <!-- Title -->
              <center>
                <h3 class="card-title">
                  <a>Alumnos</a>
                </h3>
                <span style="font-size: 5rem">
                  <i class="fas fa-user-graduate"></i>
                  {{ getStudentsAmount }}
                </span>
                <!-- Text -->
                <p class="card-text">Vea, modifique y elimine a alumnos.</p>
              </center>
            </div>
          </router-link>
        </div>
        <!-- Card -->
      </div>
    </div>
  </div>
</template>

<script>
const Breadcrumb = () =>
  import(
    /* webpackChunkName: "Breadcrumb" */ "@/components/dashboard/Breadcrumb.vue"
  );
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Breadcrumb
  },
  created() {
    this.getPages();
    this.getCareers();
    this.getPosts();
    this.getAspirants();
    this.getStudents();
    this.getInstituteInfo();
  },
  computed: {
    ...mapState(["pages", "careers", "posts", "aspirants", "students"]),

    getPagesAmount() {
      return this.pages.length + this.careers.length;
    },

    getPostsAmount() {
      return this.posts.length;
    },

    getAspirantsAmount() {
      return this.aspirants.length;
    },

    getStudentsAmount() {
      return this.students.length;
    }
  },
  methods: {
    ...mapActions([
      "getPages",
      "getCareers",
      "getPosts",
      "getAspirants",
      "getStudents",
      "getInstituteInfo"
    ])
  }
};
</script>

<style scoped>
a {
  color: rgb(31, 64, 92);
}
a:hover {
  color: #6096cc;
}
</style>
