<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<script>
import Main from "@/components/layouts/Main.vue"
import SimpleLayout from "@/components/layouts/SimpleLayout.vue"
import DashboardLayout from "@/components/layouts/DashboardLayout.vue"
import { mapState } from "vuex"

export default {
  components: {
    Main,
    SimpleLayout,
    DashboardLayout
  },
  computed: {
    ...mapState(['layout'])
  },
};
</script>
