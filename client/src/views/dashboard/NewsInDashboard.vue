<template>
  <div>
    <div class="row mb-3">
      <div class="col-md-12">
        <Breadcrumb />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h1>Listas de novedades aquí</h1>
      </div>
    </div>
  </div>
</template>

<script>
const Breadcrumb = () => import("@/components/dashboard/Breadcrumb.vue");

export default {
  name: "NewsInDashboard",
  components: {
    Breadcrumb
  }
};
</script>