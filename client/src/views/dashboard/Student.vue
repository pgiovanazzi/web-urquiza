<template>
  <div
    v-if="$store.getters.getStudentsById(getId)"
  >Alumno: {{ $store.getters.getStudentsById(getId) }}</div>
</template>

<script>
export default {
  name: "Student",
  computed: {
    getId() {
      return this.$route.params.id;
    }
  }
};
</script>

<style>
</style>