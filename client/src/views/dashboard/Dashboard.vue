<template>
  <div class="container mt-5 p-2">
    <Breadcrumb />
    <Home v-if="$route.path === '/panel'" />
    <router-view></router-view>
  </div>
</template>


<script>
const Home = () =>
  import(/* webpackChunkName: "HomeDB" */ "@/components/dashboard/Home.vue");
const Breadcrumb = () => import("@/components/dashboard/Breadcrumb.vue");

export default {
  name: "Dashboard",
  components: {
    Home,
    Breadcrumb
  },
  created() {
    this.$store.commit("SET_LAYOUT", "DashboardLayout");
  }
};
</script>