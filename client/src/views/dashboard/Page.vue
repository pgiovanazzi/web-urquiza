<template>
  <div>
    <div class="row" v-if="isPathPage">
      <div class="col-lg-8 col-md-12 mt-3" v-if="pageByAlias(getAlias)">
        <div v-html="pageByAlias(getAlias).content"></div>
      </div>
      <div class="col-lg-4 col-md-12 mt-3">
        <DBSidebar :data="pageByAlias(getAlias)" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
const DBSidebar = () => import("@/components/dashboard/Sidebar.vue");

export default {
  name: "Page",
  components: {
    DBSidebar
  },
  created() {
    this.$store.dispatch("getPages");
  },
  computed: {
    isPathPage() {
      return this.$route.path === "/panel/paginas/" + this.getAlias;
    },

    getAlias() {
      return this.$route.params.id;
    },

    pageByAlias() {
      if (this.$store.getters.getCareerByAlias(this.getAlias))
        return this.$store.getters.getCareerByAlias;
      else return this.$store.getters.getPageByAlias;
    }
  }
};
</script>