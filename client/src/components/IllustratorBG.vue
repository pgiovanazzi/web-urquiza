<template>
  <div class="contaier">
    <div class="row">
      <div class="col-md-12 text-center">
        <object
          class="mg-fluid "
          :data="bgIllustrator"
          type="image/svg+xml"
        ></object>
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
.s1 {
  z-index: -1;
  position: absolute;
  margin-left: 3.5em;
  display: block;
  width: 600px;
  height: 100vh;
  object-fit: cover;
}

.s2 {
  z-index: -1;
  position: absolute;
  margin-left: 75em;
  display: block;
  width: 600px;
  height: 100vh;
  object-fit: cover;
}
</style>
