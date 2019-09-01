<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 col-sm-12 mb-3">
        <!-- Card -->
        <div class="card">
          <router-link to="#">
            <!-- Card content -->
            <div class="card-body">
              <!-- Title -->
              <center>
                <h3 class="card-title">
                  <a>Páginas</a>
                </h3>
                <span style="font-size: 5rem">
                  <i class="far fa-file-alt"></i> 10
                </span>
                <!-- Text -->
                <p class="card-text">Vea, cree, modifique y elimine Páginas.</p>
              </center>
            </div>
          </router-link>
        </div>
        <!-- Card -->
      </div>
      <div class="col-md-6 col-sm-12">
        <!-- Card -->
        <!-- Card content -->
        <div class="card">
          <router-link to="#">
            <div class="card-body">
              <!-- Title -->
              <center>
                <h3 class="card-title">
                  <a>Novedades</a>
                </h3>
                <span style="font-size: 5rem">
                  <i class="far fa-newspaper"></i> 5
                </span>
                <!-- Text -->
                <p class="card-text">Vea, cree, modifique y elimine las novedades.</p>
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
        <div class="card">
          <router-link to="#">
            <!-- Card content -->
            <div class="card-body">
              <!-- Title -->
              <center>
                <h3 class="card-title">
                  <a>Aspirantes</a>
                </h3>
                <span style="font-size: 5rem">
                  <i class="fas fa-users"></i> 103
                </span>
                <p class="card-text">Vea, modifique, elimine y dé de alta a los Aspirantes.</p>
              </center>
            </div>
          </router-link>
        </div>
        <!-- Card -->
      </div>
      <div class="col-md-6 col-sm-12">
        <!-- Card -->
        <div class="card">
          <router-link to="#">
            <!-- Card content -->
            <div class="card-body">
              <!-- Title -->
              <center>
                <h3 class="card-title">
                  <a>Alumnos</a>
                </h3>
                <span style="font-size: 5rem">
                  <i class="fas fa-user-graduate"></i> 301
                </span>
                <!-- Text -->
                <p class="card-text">Vea, modifique, elimine Alumnos.</p>
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
export default {
  name: "Dashboard",
  created() {
    this.$store.commit("SET_LAYOUT", "DashboardLayout");
  }
};
</script>