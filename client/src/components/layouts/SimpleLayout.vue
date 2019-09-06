<template>
  <div id="simpleLayout">
    <nav class="navbar navbar-dark">
      <a class="navbar-brand" href="/"><i class="fas fa-angle-left"></i> Volver al inicio</a>
    </nav>
    <div class="container">
      <div class="row m-5">
        <div class="col-md-12 d-flex justify-content-center">
          <object id="iconPreIns" :data="urqzSvg" type="image/svg+xml"></object>
        </div>
      </div>
      <component :is="setComponentInSimpleLayout"></component>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Preinscribirse from "@/views/preinscribirse/Preinscribirse.vue";
import PreInsSuccessComponent from "@/components/PreInsSuccessComponent.vue";
import SuperUserSignIn from "@/views/SU/SuperUserSignIn.vue"
import { mapState } from "vuex";

export default {
  name: "SimpleLayout",
  components: {
    Footer,
    Preinscribirse,
    PreInsSuccessComponent,
    SuperUserSignIn
  },
  computed: {
    ...mapState(["setComponentInSimpleLayout"])
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

#simpleLayout {
  background: url("https://source.unsplash.com/user/iroot/2560x1440") no-repeat center
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
