<template>
  <div class="bc-icons-2">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb lighten-4">
        <div v-if="getSetPath.length > 1">
          <li v-for="(page, idx) of getSetExcludeLastPage" :key="idx" class="breadcrumb-item">
            <router-link :to="getPath(page, path)">{{ page | capitalize }}</router-link>
            <i class="fas fa-caret-right mx-2" aria-hidden="true"></i>
          </li>
        </div>
        <li class="breadcrumb-item active">{{ getLastPage | capitalize }}</li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  computed: {
     getSetPath() {
      return this.$route.path.split("/").slice(1);
    },
    getLastPage() {
      return this.getSetPath[this.getSetPath.length - 1];
    },
    getSetExcludeLastPage() {
      return this.getSetPath.slice(0, this.getSetPath.length - 1);
    },
  },
  data() {
    return {
      path: ""
    };
  },
  methods: {
    getPath(page, pathIn) {
      pathIn += "/" + page;
      return pathIn;
    }
  }
};
</script>