<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<script>
import Main from "@/components/layouts/Main.vue"
import LayoutPreinscribirse from "@/components/layouts/Preinscribirse.vue"
import { mapState } from "vuex"

export default {
  components: {
    Main,
    LayoutPreinscribirse
  },
  computed: {
    ...mapState(['layout'])
  },
};
</script>
