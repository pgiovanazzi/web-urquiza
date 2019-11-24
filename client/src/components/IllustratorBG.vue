<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 d-flex justify-content-end">
        <object class="s1" :data="bgIllustrator" type="image/svg+xml"></object>
      </div>
      <div class="col-md-6 d-flex justify-content-start">
        <object class="s2" :data="bgIllustrator2" type="image/svg+xml"></object>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IllustratorBG",
  data() {
    return {
      bgIllustrator: require("@/assets/undraw_code_typing_7jnv.svg"),
      bgIllustrator2: require("@/assets/undraw_code_typing_7jnv.svg")
    };
  }
};
</script>

<style scoped>
.s1,
.s2 {
  height: 500px;
}

.s1 {
  margin-right: 230px;
}
.s1 {
  margin-left: 230px;
}
</style>
