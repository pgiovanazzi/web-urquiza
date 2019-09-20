<template>
  <div>
    <div class="row" v-if="$route.path === '/panel/novedades/' + getAlias">
      <div class="col-lg-8 col-md-12 mt-3" v-if="postByAlias(getAlias)">
        <div v-html="postByAlias(getAlias).content"></div>
      </div>
      <div class="col-lg-4 col-md-12 mt-3">
        <DBSidebar :data="$store.getters.getPostByAlias(getAlias)" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import DBSidebar from "@/components/dashboard/Sidebar.vue";

export default {
  name: "NewInDashboard",
  components: {
    DBSidebar
  },
  created() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    getAlias() {
      return this.$route.params.id;
    },

    postByAlias() {
      return this.$store.getters.getPostByAlias;
    }
  }
};
</script>