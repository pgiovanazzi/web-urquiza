<template>
  <div class="row p-5">
    <div class="col sm-12">
      <h1>Autoridades</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "autoridades",
  created() {
    this.$store.commit("SET_LAYOT", "Main");
  }
};
</script>
