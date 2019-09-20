<template>
  <div class="card">
    <ul class="list-group list-group-flush" v-if="data">
      <li class="list-group-item active text-center">Información de la publicación</li>
      <li class="list-group-item">Descripción: {{ data.description }}</li>
      <li class="list-group-item">Fecha de creación: {{ data.date | formatDate2 }}</li>
      <li class="list-group-item">Publicado: {{ data.published === 'true' ? 'Si' : 'No'}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DBSidebar",
  props: {
    data: Object
  }
};
</script>

<style lang="css" scoped>
  .active {
    background-color: #1f405c !important
  }
 </style>