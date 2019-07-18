<template>
<div>
  <div class="row">
    <div
      class="col-sm-12 col-md-4 d-flex align-items-stretch"
      v-for="(career, idx) of careers"
      :key="idx"
    >
      <Card
        :careerName="career.name"
        :careerDesc="career.description"
        :careerImage="getImgUrl(career.imageName)"
        :careerRoute="career.route"
      />
    </div>
  </div>
  <hr/>
  <div class="row">
    <div class="col-lg-8 col-md-12">
      <UltimaNovedad/>
    </div>
    <div class="col-lg-4 col-md-12">
      <h4>Ultimas Novedades</h4>
      <NovedadesLista/>
      <NovedadesLista/>
    </div>
  </div>
</div>
</template>require

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import NovedadesLista from "@/components/NovedadesLista.vue"
import UltimaNovedad from "@/components/UltimaNovedad.vue"
import { mapState, mapActions } from "vuex";

export default {
  name: "inicio",
  components: {
    Card,
    NovedadesLista,
    UltimaNovedad
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState(["careers"])
  },
  created() {
    this.getCareers()
  },
  methods: {
    ...mapActions(["getCareers"]),
    getImgUrl(imgIn) {
      return require(`@/assets/${imgIn}`)
    }
  },
};
</script>


