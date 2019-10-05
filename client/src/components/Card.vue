<template>
  <!-- Card Light -->
  <div class="card mb-4">
    <!-- Card image -->
    <div class="view">
      <img
        class="card-img-top"
        :src="bgCareersLogo[careerObj.description]"
        :alt="careerObj.description"
      />
      <object id="icono" :data="getImgUrl(careerObj.logotype)" type="image/svg+xml"></object>
      <a>
        <div class="mask pattern-7"></div>
      </a>
    </div>

    <!-- Card content -->
    <blockquote class="blockquote mb-0 card-body">
      <!-- Title -->
      <h4 class="card-title mt-3">{{ careerObj.description }}</h4>
      <hr />
      <!-- Text -->
      <p class="card-text" v-html="cutText(careerObj.content, careerObj.description)"></p>
    </blockquote>
    <!-- Link -->
    <div class="card-footer">
      <router-link
        :to="{ name: 'Careers', params: { careersPage: careerObj.url }}"
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
    careerObj: Object
  },
  methods: {
    getImgUrl(imgIn) {
      return require(`@/../../uploaded-files/${imgIn}`);
    },

    cutText(contentIn, description) {
      const MAX = description.split(" ").length < 4 ? 48 : 35;
      let content = "",
        count = 0;

      for (const word of contentIn.split(" ")) {
        content += word + " ";
        if (count == MAX) break;
        else count++;
      }

      return content + " ...";
    }
  },
  data() {
    return {
      bgCareersLogo: {
        "Análisis Funcional de Sistemas Informáticos": require(`@/assets/funcional.jpg`),
        "Infraestructura de Tecnología de la Información": require(`@/assets/datacenter.jpg`),
        "Desarrollo de Software": require(`@/assets/compu.jpeg`)
      }
    };
  }
};
</script>

<style scoped>
.card {
  width: 100%;
}

.card-text {
  word-wrap: break-word;
}

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

