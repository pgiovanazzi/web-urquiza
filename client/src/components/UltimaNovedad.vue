<template>
  <div class="col-lg-12 col-md-12">
    <div class="row mb-5">
      <small>{{ getLastPost.date | formatDate2 }}</small>
    </div>
    <div v-html="getLastPost.content"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ultimaNovedad",
  computed: {
    ...mapGetters(["getLastPost"])
  }
};
</script>