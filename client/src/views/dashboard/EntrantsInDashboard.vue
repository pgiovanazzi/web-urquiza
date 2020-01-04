<template>
  <div>
    <div class="container">
      <div class="row mb-3 mt-5">
        <div class="col-md-12">
          <h3>Aspirantes registrados</h3>
        </div>
      </div>
      <div class="row" v-if="$store.getters.getAspirants">
        <div class="col-md-12">
          <vue-good-table
            :columns="columns"
            :rows="rows"
            :line-numbers="true"
            @on-row-click="onRowClick"
            :search-options="{
              enabled: true,
              placeholder: 'Buscar aspirante'
            }"
            :pagination-options="{
              enabled: true,
              nextLabel: 'Siguiente',
              prevLabel: 'Anterior',
              rowsPerPageLabel: 'Filas por página',
              ofLabel: 'de',
              pageLabel: 'página',
              allLabel: 'Todas'
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import the styles
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

export default {
  name: "EntrantsInDashboard",

  components: {
    VueGoodTable
  },

  async created() {
    await this.$store.dispatch("getAspirants");
  },

  data() {
    return {
      columns: [
        {
          label: "Nombre",
          field: "name"
        },
        {
          label: "Tipo de Documento",
          field: "doc_type"
        },
        {
          label: "Numero de documento",
          field: "dni",
          type: "number"
        },
        {
          label: "Carrera",
          field: "career"
        },
        {
          label: "Fecha de Preinscripción",
          field: this.fealdFn
        }
      ],
      rows: this.$store.getters.getAspirants
    };
  },

  updated() {
    this.rows = this.$store.getters.getAspirants;
  },

  methods: {
    onRowClick(params) {
      this.$router.push(`/panel/aspirante/${params.row._id}`);
    },

    fealdFn(param) {
      if (param) {
        return this.$options.filters.formatDate2(param.signupDate);
      }
    }
  }
};
</script>
