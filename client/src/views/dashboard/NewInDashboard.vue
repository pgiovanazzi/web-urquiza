<template>
  <div class="col-lg-12 col-md-12" v-if="postByAlias(getAlias)">
    <div class="row mb-5">
      <small>{{ postByAlias(getAlias).date | formatDate2 }}</small>
    </div>
    <div v-html="postByAlias(getAlias).content"></div>
  </div>
</template>

<script>

export default {
  name: "NewInDashboard",
  created() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    getAlias() {
      return this.$route.params.id
    },
    postByAlias() {
      return this.$store.getters.getPostByAlias;
    }
  }
};
</script>