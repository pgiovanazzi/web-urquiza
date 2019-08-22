<template>
  <div class="col-lg-12 col-md-12">
    <div class="row mb-5">
      <small>{{ findPost(id).date | formatDate2 }}</small>
    </div>
    <div v-html="findPost(id).content"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Novedades",
  computed: {
    ...mapState(["posts"])
  },
  watch: {
    $route(to, from) {
      this.id = this.getId();
    }
  },
  data() {
    return {
      id: this.getId()
    };
  },
  methods: {
    getId() {
      return this.$route.params.id;
    },
    findPost(titleId) {
      var post = {};
      for (let index = 0; index < this.posts.length; index++) {
        if (this.posts[index].title == titleId) {
          post = this.posts[index];
          break;
        }
      }
      return post;
    }
  }
};
</script>