<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <!-- Card -->
        <div class="card">
          <!-- Card content -->
          <div class="card-body">
            <!-- Title -->
            <h4 class="card-title">
              <a>Páginas</a>
            </h4>
            <!-- Text -->
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <!-- Button -->
            <a href="#" class="btn btn-primary">Button</a>
          </div>
        </div>
        <!-- Card -->
      </div>
      <div class="col-md-6 col-sm-12">
        <!-- Card -->
        <div class="card">
          <!-- Card content -->
          <div class="card-body">
            <!-- Title -->
            <h4 class="card-title">
              <a>Novedades</a>
            </h4>
            <!-- Text -->
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <!-- Button -->
            <a href="#" class="btn btn-primary">Button</a>
          </div>
        </div>
        <!-- Card -->
      </div>
    </div>
       <div class="row mt-4">
      <div class="col-md-6 col-sm-12">
        <!-- Card -->
        <div class="card">
          <!-- Card content -->
          <div class="card-body">
            <!-- Title -->
            <h4 class="card-title">
              <a>Aspirantes</a>
            </h4>
            <!-- Text -->
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <!-- Button -->
            <a href="#" class="btn btn-primary">Button</a>
          </div>
        </div>
        <!-- Card -->
      </div>
      <div class="col-md-6 col-sm-12">
        <!-- Card -->
        <div class="card">
          <!-- Card content -->
          <div class="card-body">
            <!-- Title -->
            <h4 class="card-title">
              <a>Alumnos</a>
            </h4>
            <!-- Text -->
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <!-- Button -->
            <a href="#" class="btn btn-primary">Button</a>
          </div>
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
    this.$store.commit('SET_LAYOUT', 'DashboardLayout')
  },
};
</script>