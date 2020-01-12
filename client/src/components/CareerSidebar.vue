<template>
  <div>
    <table class="table table-border">
      <thead>
        <tr>
          <th scope="col">
            <h4 class="mt-2">Información de la carrera</h4>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, idx) of careerData" :key="idx">
          <th scope="row" v-if="data != 'studyPlanFile'">
            <strong>{{ idx }}:</strong>
            <div v-if="data != 'time'">
              {{ career[data] }}
            </div>
            <div v-else>
              {{ convertTimes(career[data]) }}
            </div>
          </th>
          <th scope="row" v-else>
            <a
              class="btn btn-link m-0 p-0"
              :href="getPdf(career[data])"
              target="_blank"
              >Plan de Estudio</a
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CareerSidebar",
  props: {
    career: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      careerData: {
        Título: "certificName",
        Años: "years",
        Turno: "time",
        "Plan de Estudio": "studyPlanFile"
      },

      longTimeString: {
        M: "Mañana",
        T: "Tarde",
        N: "Noche"
      }
    };
  },
  methods: {
    getPdf(name) {
      return "/uploaded-files/" + name;
    },

    convertTimes(t) {
      return this.longTimeString[t];
    }
  }
};
</script>
