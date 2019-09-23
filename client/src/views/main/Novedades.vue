<template>
  <div class="col-lg-12 col-md-12" v-if="findPost.published">
    <div class="row mb-5">
      <small>{{ findPost.date | formatDate2 }}</small>
    </div>
    <div v-html="findPost.content"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Novedades",
  computed: {
    ...mapGetters(["getPostsInState"]),
    getId() {
      return this.$route.params.id;
    },
    findPost() {
      let post = {};
      for (let idx = 0; idx < this.getPostsInState.length ; idx++)
        if (this.getPostsInState[idx].alias == this.getId) {
          post = this.getPostsInState[idx];
          break;
        }
      return post;
    }
  },
  watch: {
    $route(to, from) {
      this.id = this.getId;
    }
  },
  data() {
    return {
      id: this.getId
    };
  }
};
</script>