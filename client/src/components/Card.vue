<template>
  <!-- Card Light -->
  <div class="card mb-4 hoverable">
    <!-- Card image -->
    <div class="view overlay">
      <!-- <img class="card-img-top" :src="getImgUrl(careerObj.imageName)" :alt="careerObj.name" /> -->
      <!-- <object id="icono" :data="urquizaSvg" type="image/svg+xml"></object> -->
      {{careerObj.imageName}}
      <a>
        <div class="mask rgba-white-slight"></div>
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
      <router-link :to="{ name: 'Careers', params: { careersPage: careerObj.route }}" class="black-text d-flex justify-content-end">
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
    careerObj: Object
  },
  methods: {
    getImgUrl(imgIn) {
      return require(`@/assets/${imgIn}`);
    }
  },
  data() {
    return {
      // urquizaSvg: require(`@/assets/DS2.svg`)
    }
  },
};
</script>

<style scoped>

hr {
  margin: 10px;
}

a {
  color: #212529 !important
}

a:hover {
  color: #6096cc !important;
}

.card-footer {
  background-color: #fff !important
}

#icono {
  width: 9rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
}
</style>

