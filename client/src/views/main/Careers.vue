<template>
  <div>
    <h1><div v-html="findTitlePageByParams(id)"></div></h1>
    <img :src="findImagePageByParams(id)" class="mx-auto d-block img-thumbnail m-4" :alt="findTitlePageByParams(id)">
    <div v-html="findPageByParams(id)"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Careers",
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
      id: this.getID()
    };
  },
  methods: {
    getID() {
      return this.$route.params.careersPage;
    },
    findPageByParams(urlIn) {
      let data = "";
      for (let index = 0; index < this.careers.length; index++) {
        if (this.careers[index].route == urlIn) {
          data = this.careers[index].description;
          break;
        }
      }
      return data;
    },
    findTitlePageByParams(urlIn) {
      let data = "";
      for (let index = 0; index < this.careers.length; index++) {
        if (this.careers[index].route == urlIn) {
          data = this.careers[index].name;
          break;
        }
      }
      return data;
    },
    findImagePageByParams(urlIn) {
      let data = "";
      for (let index = 0; index < this.careers.length; index++) {
        if (this.careers[index].route == urlIn) {
          data = this.careers[index].imageName;
          break;
        }
      }
      return require('@/assets/' + data);
    }
  }
};
</script>