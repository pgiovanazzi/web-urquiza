<template>
  <div>
    <div v-html="findPageByParams(id)"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Entrants",
  computed: {
    ...mapState(["pages"])
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
      return this.$route.params.entrantsPage;
    },
    findPageByParams(urlIn) {
      let data = "";
      for (let index = 0; index < this.pages.length; index++) {
        if (this.pages[index].url == urlIn) {
          data = this.pages[index].content;
          break;
        }
      }
      return data;
    }
  }
};
</script>