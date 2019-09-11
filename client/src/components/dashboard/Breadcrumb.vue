<template>
  <div class="bc-icons-2">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb lighten-4">
        <li
          v-show="getSetPath.length > 1"
          v-for="(page, idx) of getSetExcludeLastPage"
          :key="idx"
          class="breadcrumb-item"
        >
          <router-link
            :to="{ name: getPaths[idx], params: { id: page.alias } }"
          >{{ page | capitalize }}</router-link>
          <i class="fas fa-caret-right mx-2" aria-hidden="true"></i>
        </li>
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
    getPaths() {
      this.setPaths.push(this.$route.name);
      return this.setPaths;
    }
  },
  data() {
    return {
      setPaths: ["Panel"]
    };
  }
};
</script>

<style scoped>
.bc-icons-2 .breadcrumb-item + .breadcrumb-item::before {
  content: none;
}
.bc-icons-2 .breadcrumb-item.active {
  color: #455a64;
}
</style>