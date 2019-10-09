<template>
  <div>
    <div class="row" v-if="isPathPost">
      <div class="col-lg-8 col-md-12 mt-3" v-if="postByAlias(getAlias)">
        <div v-html="postByAlias(getAlias).content"></div>
      </div>
      <div class="col-lg-4 col-md-12 mt-3">
        <DBSidebar :data="postByAlias(getAlias)" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
const DBSidebar = () => import("@/components/dashboard/Sidebar.vue");

export default {
  name: "NewInDashboard",
  components: {
    DBSidebar
  },
  created() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    isPathPost() {
      return this.$route.path === "/panel/novedades/" + this.getAlias;
    },

    getAlias() {
      return this.$route.params.id;
    },

    postByAlias() {
      return this.$store.getters.getPostByAlias;
    }
  }
};
</script>