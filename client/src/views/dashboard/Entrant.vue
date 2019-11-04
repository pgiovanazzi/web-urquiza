<template>
  <div class="row">
    <div class="col-md-12">
      <h3>Información del aspirante:</h3>
      <p>Nombre y Apellido: {{ getEntrantById(getId).name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Entrant",
  computed: {
    getId() {
      return this.$route.params.id;
    }
  },
  methods: {
    getEntrantById(id) {
      return this.$store.getters.getAspirants.filter(
        aspirant => aspirant._id == id
      )[0];
    }
  }
};
</script>

<style>
</style>