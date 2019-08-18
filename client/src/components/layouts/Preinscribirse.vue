<template>
  <div id="layoutPreIns">
    <nav class="navbar navbar-dark">
      <a class="navbar-brand" href="/">Volver al inicio</a>
    </nav>
    <div class="container">
      <div class="row m-5">
        <div class="col-md-12 d-flex justify-content-center">
          <object id="iconPreIns" :data="urqzSvg" type="image/svg+xml"></object>
        </div>
      </div>
      <component :is="compsForm"></component>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Preinscribirse from "@/views/preinscribirse/Preinscribirse.vue";
import PreInsSuccessComponent from "@/components/PreInsSuccessComponent.vue";
import { mapState } from "vuex";

export default {
  name: "LayoutPreinscribirse",
  components: {
    Footer,
    Preinscribirse,
    PreInsSuccessComponent
  },
  computed: {
    ...mapState(["compsForm"])
  },
  data() {
    return {
      urqzSvg: require("@/assets/Urquiza_Icon.svg")
    }
  },
};
</script>

<style scoped>
#iconPreIns {
  width: 25rem;
}

#layoutPreIns {
  background: url("../../assets/urquiza-img-background.png") no-repeat center
    center/cover fixed;
  background-size: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

.navbar {
  background-color: rgba(18, 51, 78, 0.904);
}
.navbar-brand {
  font-size: 0.9rem;
}
</style>
