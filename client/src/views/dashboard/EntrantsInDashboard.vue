<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h1>Lista de aspirantes aquí</h1>
      </div>
    </div>
  </div>
</template>

<script>
const Breadcrumb = () => import("@/components/dashboard/Breadcrumb.vue");

export default {
  name: "EntrantsInDashboard",
  components: {
    Breadcrumb
  }
};
</script>