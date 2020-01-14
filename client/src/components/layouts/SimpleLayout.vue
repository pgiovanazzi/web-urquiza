<template>
  <div id="simpleLayout" class="asyncImage" data-src="https://i.imgur.com/J6Lc4HD.jpg?1">
    <nav class="navbar navbar-dark">
      <a class="navbar-brand" href="/"
        ><i class="fas fa-angle-left"></i> Volver al inicio</a
      >
    </nav>
    <div :class="vContainer">
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
import SuperUserSignIn from "@/views/SU/SuperUserSignIn.vue";
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
    ...mapState(["setComponentInSimpleLayout"]),
  },
  data() {
    return {
      urqzSvg: require("@/assets/Urquiza_Icon.svg"),
      vContainer: {
        container: this.setContainer(),
        'container-fluid': this.setContainer()
      }
    };
  }, 

  mounted() {
    (() => {
      'use strict';
      // Page is loaded
      const objects = document.getElementsByClassName('asyncImage');
      Array.from(objects).map((item) => {
        // Start loading image
        const img = new Image();
        img.src = item.dataset.src;
        // Once image is loaded replace the src of the HTML element
        img.onload = () => {
          item.classList.remove('asyncImage');
          return item.nodeName === 'IMG' ? 
            item.src = item.dataset.src :
            item.style.backgroundImage = `url(${item.dataset.src})`;
        };
      });
    })();
  },

  methods: {
    setContainer() {
      return window.screen.width >= 415 && window.screen.height >= 737
    }
  }
};


</script>

<style scoped>
#iconPreIns {
  width: 25rem;
}

#simpleLayout {
  background: url("https://i.imgur.com/xaE6kMZ.png") no-repeat
    center center/cover fixed;
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
