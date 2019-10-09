<template>
  <div class="card">
    <ul class="list-group list-group-flush" v-if="data">
      <li class="list-group-item active text-center">Información de la publicación</li>
      <li class="list-group-item">
        <strong>Título:</strong>
        {{ data.description }}
      </li>
      <li class="list-group-item">
        <strong>Fecha de creación:</strong>
        {{ data.date | formatDate2 }}
      </li>
      <li class="list-group-item">
        <strong>Publicado:</strong>
        {{ data.published ? 'Si' : 'No'}}
      </li>
      <li class="list-group-item" v-if="data.section">
        <strong>Sección:</strong>
        {{ data.section }}
      </li>
      <li class="list-group-item" v-if="$store.getters.getCareerByAlias($route.params.id)">
        <strong>Nombre del Título de la carrera:</strong>
        {{ data.certificName }}
      </li>
      <li class="list-group-item" v-if="$store.getters.getCareerByAlias($route.params.id)">
        <strong>Logotipo:</strong>
        {{ data.logotype }}
      </li>
      <li class="list-group-item" v-if="$store.getters.getCareerByAlias($route.params.id)">
        <strong>Plan de la carrera:</strong>
        {{ data.studyPlanFile }}
      </li>
      <li class="list-group-item" v-if="$store.getters.getCareerByAlias($route.params.id)">
        <strong>Cantidad de años:</strong>
        {{ data.years }}
      </li>
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
  background-color: #1f405c !important;
}
</style>