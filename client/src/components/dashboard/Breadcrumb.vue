<template>
  <div class="bc-icons-2">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb lighten-4">
        <li v-for="(path, idx) of getBreadcrumbPathsWithLink" :key="idx" class="breadcrumb-item">
          <router-link
            class="btn btn-outline-link waves-effect btn-sm"
            :to="isPathDynamicLink(path)"
          >{{ path.name }}</router-link>
        </li>
        <li class="breadcrumb-item active">
          <button
            class="btn btn-outline-link waves-effect btn-sm"
            disabled
          >{{ isPathDynamicName(getLastBreadcrumPath)}}</button>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  computed: {
    getLastBreadcrumPath() {
      return this.$route.meta.breadcrumb[
        this.$route.meta.breadcrumb.length - 1
      ];
    },

    getBreadcrumbPathsWithLink() {
      let bcPaths = [];
      this.$route.meta.breadcrumb.forEach(objPath => {
        if (objPath.isDynamicParam && objPath.link) {
          bcPaths.push({
            name: objPath.name(this.$route.params.id),
            link: objPath.link(this.$route.params.id),
            isDynamicParam: false
          });
        } else bcPaths.push(objPath);
      });
      return bcPaths.filter(bc => bc.link);
    }
  },
  methods: {
    isPathDynamicLink(path) {
      if (path.isDynamicParam) return path.link(this.$route.params.id);
      return path.link;
    },

    isPathDynamicName(path) {
      if (path.isDynamicParam) return path.name(this.$route.params.id);
      return path.name;
    }
  }
};
</script>

<style scoped>
</style>