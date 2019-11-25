<template>
  <div>
    <h1>
      <div class="pb-5 p-sm-1 p-md-4" v-html="findTitleByParams(id)"></div>
    </h1>
    <img
      :src="findImageByParams(id)"
      class="mx-auto d-block img-thumbnail m-4"
      :alt="findTitleByParams(id)"
    />
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div
            class="pb-5 p-sm-1 p-md-4 s2"
            v-html="findContentByParams(id)"
          ></div>
        </div>
        <div class="col-md-4">
          <CareerSidebar :career="$store.getters.getCareerByAlias(id)" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 d-flex justify-content-end">
          <object
            class="s1"
            :data="setBG[getID()]"
            type="image/svg+xml"
          ></object>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
const CareerSidebar = () => import("@/components/CareerSidebar.vue");

export default {
  name: "Careers",

  components: {
    CareerSidebar
  },

  computed: {
    ...mapState(["careers"])
  },

  watch: {
    $route(to, from) {
      this.id = this.getID();
    }
  },

  data() {
    return {
      id: this.getID(),
      setBG: {
        "infraestructura-de-tecnologia-de-la-informacion": require("@/assets/undraw_server_status_5pbv.svg"),
        "analisis-funcional-de-sistemas-informaticos": require("@/assets/undraw_detailed_analysis_xn7y.svg"),
        "desarrollo-de-software": require("@/assets/undraw_code_review_l1q9.svg")
      }
    };
  },

  methods: {
    getID() {
      return this.$route.params.careersPage;
    },

    findContentByParams(urlIn) {
      let data = "";
      for (let index = 0; index < this.careers.length; index++) {
        if (this.careers[index].url == urlIn) {
          data = this.careers[index].content;
          break;
        }
      }
      return data;
    },

    findTitleByParams(urlIn) {
      let data = "";
      for (let index = 0; index < this.careers.length; index++) {
        if (this.careers[index].url == urlIn) {
          data = this.careers[index].description;
          break;
        }
      }
      return data;
    },

    findImageByParams(urlIn) {
      let data = "";
      for (let index = 0; index < this.careers.length; index++) {
        if (this.careers[index].url == urlIn) {
          data = this.careers[index].logotype;
          break;
        }
      }
      return require(`@/../../uploaded-files/${data}`);
    }
  }
};
</script>

<style lang="css">
img {
  width: 12rem;
}

.s1 {
  position: absolute;
  z-index: -1;
  margin-top: -1000px !important;
  height: 100vh;
  width: 80%;
  opacity: 0.3;
}
</style>
