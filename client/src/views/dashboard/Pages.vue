<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h1>Lista de paginas y secciones</h1>
      </div>
    </div>
  </div>
</template>

<script>
const Breadcrumb = () => import("@/components/dashboard/Breadcrumb.vue");

export default {
  name: "Pages",
  components: {
    Breadcrumb
  }
};
</script>