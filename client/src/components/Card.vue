<template>
  <!-- Card Light -->
  <div class="card mb-4">
    <!-- Card image -->
    <div class="view overlay">
      <img class="card-img-top" :src="careerImage" :alt="careerName" />
      <a>
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    <!-- Card content -->
    <div class="card-body">
      <!-- Title -->
      <h4 class="card-title">{{ careerName }}</h4>
      <hr />
      <!-- Text -->
      <p class="card-text">{{ careerDesc.slice(0,150) + "..." }}</p>
    </div>
    <!-- Link -->
    <div class="card-footer">
      <router-link :to="careerRoute" class="black-text d-flex justify-content-end">
        <h5>
          mas detalles
          <i class="fas fa-angle-double-right"></i>
        </h5>
      </router-link>
    </div>
  </div>
  <!-- Card Light -->
</template>


<script>
export default {
  name: "Card",
  props: {
    careerName: String,
    careerDesc: String,
    careerImage: String,
    careerRoute: String
  }
};
</script>

<style scoped>
hr {
  margin: 10px;
}
</style>

