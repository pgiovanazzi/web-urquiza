<template>
  <div class="bc-icons-2">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb lighten-4">
        <li v-for="(path, idx) of getBreadcrumbPathsWithLink" :key="idx" class="breadcrumb-item">
            <router-link :to="isPathDynamicLink(path)">{{ path.name }}</router-link>
        </li>
        <li class="breadcrumb-item active">{{ isPathDynamicName(getLastBreadcrumPath) | capitalize }}</li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  created() {
    console.log(this.getBreadcrumbPathsWithLink)
  },
  computed: {
    getLastBreadcrumPath() {
      return this.$route.meta.breadcrumb[this.$route.meta.breadcrumb.length - 1]
    },
    getBreadcrumbPathsWithLink() {
      // ver aquí la runta dinamica, usa la funcion definida en route
      return this.$route.meta.breadcrumb.filter( bc => bc.link )
    }
  },
  watch: {
    $route(to, from) {
    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    isPathDynamicLink(path) {
      if (path.dynamicParams) 
        return path.link(this.$route.params.id)
      return path.link
    },

    isPathDynamicName(path) {
      if (path.dynamicParams) 
        return path.name(this.$route.params.id)
      return path.name
    }
  },
};
</script>

<style scoped>

</style>