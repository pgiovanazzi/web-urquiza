<template>
  <div class="container mt-5">
    <Home v-show="$route.path === '/panel'"/>
    <router-view></router-view>
  </div>
</template>


<script>
const Home = () => import(/* webpackChunkName: "HomeDB" */ '@/components/dashboard/Home.vue');

export default {
  name: "Dashboard",
  components: {
    Home
  },
  created() {
    this.$store.commit("SET_LAYOUT", "DashboardLayout");
  }
};
</script>