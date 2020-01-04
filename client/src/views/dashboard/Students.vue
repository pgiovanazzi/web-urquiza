<template>
  <div>
    <div class="container" v-if="$store.getters.getStudents">
      <div class="row mb-3 mt-5">
        <div class="col-md-8">
          <h3>
            Alumnos registrados
          </h3>
        </div>
        <div class="col-md-4 d-flex justify-content-center">
          <button
            class="btn btn-outline-success waves-effect"
            data-toggle="modal"
            data-target="#new-student"
          >
            <i class="fas fa-user-plus"></i> Agregar nuevo alumno
          </button>
          <NewStudent />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <vue-good-table
            :columns="columns"
            :rows="rows"
            :line-numbers="true"
            @on-row-click="onRowClick"
            :search-options="{
              enabled: true,
              placeholder: 'Buscar alumnos'
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
import { StudentsService } from "@/services";
import NewStudent from "@/components/dashboard/NewStudent.vue";
// import the styles
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

export default {
  name: "Students",

  components: {
    VueGoodTable,
    NewStudent
  },

  async created() {
    await this.$store.dispatch("getStudents");
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
          label: "Alumno desde",
          field: this.fealdFn
        }
      ],
      rows: this.$store.getters.getStudents
    };
  },

  updated() {
    this.rows = this.$store.getters.getStudents;
  },

  methods: {
    onRowClick(params) {
      this.$router.push(`/panel/alumno/${params.row._id}`);
    },

    fealdFn(param) {
      if (param) {
        return this.$options.filters.formatDate2(param.signupDate);
      }
    }
  }
};
</script>

<style></style>
