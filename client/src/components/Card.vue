<template>
  <!-- Card Light -->
  <div class="card mb-4">
    <!-- Card image -->
    <div class="view">
      <img class="card-img-top" :src="bgCareersLogo[idx]" :alt="careerObj.name" />
      <object id="icono" :data="getImgUrl(removeJpg(careerObj.imageName))" type="image/svg+xml"></object>
      <a>
        <div class="mask pattern-7"></div>
      </a>
    </div>

    <!-- Card content -->
    <div class="card-body">
      <!-- Title -->
      <h4 class="card-title">{{ careerObj.name }}</h4>
      <hr />
      <!-- Text -->
      <p class="card-text">{{ careerObj.description.slice(0,150) + "..." }}</p>
    </div>
    <!-- Link -->
    <div class="card-footer">
      <router-link
        :to="{ name: 'Careers', params: { careersPage: careerObj.route }}"
        class="black-text d-flex justify-content-end"
      >
        <div>
          ver más
          <i class="fas fa-angle-double-right"></i>
        </div>
      </router-link>
    </div>
  </div>
  <!-- Card Light -->
</template>


<script>
export default {
  name: "Card",
  props: {
    careerObj: Object,
    idx: Number
  },
  methods: {
    getImgUrl(imgIn) {
      return require(`@/assets/${imgIn}.svg`);
    },
    removeJpg(nameImage) {
      return nameImage.split(".jpg")[0];
    }
  },
  data() {
    return {
      bgCareersLogo: [
        require(`@/assets/compu.jpeg`) ,
        require(`@/assets/funcional.jpg`),
        require(`@/assets/datacenter.jpg`)
      ]
    };
  }
};
</script>

<style scoped>
hr {
  margin: 10px;
}

a {
  color: #212529 !important;
}

a:hover {
  color: #6096cc !important;
}

.card-footer {
  background-color: #fff !important;
}

img {
  position: absolute;
  z-index: 0;
}

#icono {
  width: 9rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
  z-index: 1;
}
</style>

