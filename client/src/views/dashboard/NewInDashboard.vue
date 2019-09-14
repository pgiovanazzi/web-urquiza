<template>
  <div class="col-lg-12 col-md-12">
    <div class="row mb-5">
         <small>{{  getPostByAlias(getAlias).date | formatDate2 }}</small>
      </div>
    <div v-html=" getPostByAlias(getAlias).content"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NewInDashboard",
  computed: {
    getAlias() {
      return this.$route.params.id;
    },
    ...mapGetters(["getPostByAlias"])
  }
};
</script>