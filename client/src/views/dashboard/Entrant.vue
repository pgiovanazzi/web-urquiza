<template>
  <div class="row">
    <div class="col-md-6">
      <!--Table-->
      <table id="tablePreview" class="table table-hover table-bordered shadow">
        <!--Table head-->
        <thead>
          <tr>
            <th scope="col">
              <h3>Información del Aspirante</h3>
              <small>
                <samp>Fecha de registro: {{ getEntrantById(getId).signupDate | formatDate2 }}</samp>
              </small>
            </th>
          </tr>
        </thead>
        <!--Table head-->
        <!--Table body-->
        <tbody>
          <tr v-for="(item, idx) in aspirantDataFields" :key="idx">
            <td>
              <p>
                <strong>{{ idx }}:</strong>
                {{ item == 'birth'? formater(item) : getEntrantById(getId)[item] }}
              </p>
            </td>
          </tr>
        </tbody>
        <!--Table body-->
      </table>
      <!--Table-->
    </div>
    <div class="col-md-6">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <!--Table-->
            <table id="tablePreview" class="table table-hover table-bordered shadow">
              <!--Table head-->
              <thead>
                <tr>
                  <th scope="col">
                    <h3>Carrera a seguir</h3>
                    <br />
                  </th>
                </tr>
              </thead>
              <!--Table head-->
              <!--Table body-->
              <tbody>
                <tr v-for="(item, idx) in aspirantDataStudies" :key="idx">
                  <td>
                    <p>
                      <strong>{{ idx }}:</strong>
                      {{ getEntrantById(getId)[item]}}
                    </p>
                  </td>
                </tr>
              </tbody>
              <!--Table body-->
            </table>
            <!--Table-->
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <!--Table-->
            <table id="tablePreview" class="table table-hover table-bordered shadow">
              <!--Table head-->
              <thead>
                <tr>
                  <th scope="col">
                    <h3>Otros estudios superiores</h3>
                    <br />
                  </th>
                </tr>
              </thead>
              <!--Table head-->
              <!--Table body-->
              <tbody>
                <tr v-for="(item, idx) in aspirantDataOtherStudies" :key="idx">
                  <td>
                    <p>
                      <strong>{{ idx }}:</strong>
                      {{ getEntrantById(getId)[item]}}
                    </p>
                  </td>
                </tr>
              </tbody>
              <!--Table body-->
            </table>
            <!--Table-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Entrant",
  computed: {
    getId() {
      return this.$route.params.id;
    }
  },

  data() {
    return {
      aspirantDataFields: {
        "Nombre y Apellido": "name",
        "Tipo de documento": "doc_type",
        "Numero de documento": "dni",
        "Fecha de nacimiento": "birth",
        Genero: "gender",
        "E-mail": "email",
        "Numero de telefono": "phone_number",
        Dirección: "address",
        Piso: "floor",
        Departamento: "dpt",
        Ciudad: "city",
        "Codigo postal": "zip_code"
      },
      aspirantDataStudies: {
        "Año de incripción de carrera": "year_ins",
        Carrera: "career",
        Establecimiento: "place_career"
      },
      aspirantDataOtherStudies: {
        "Estudios superiores": "estudios_sup",
        "Ultimo año cursado": "last_year_c",
        "Estado de la carrera": "career_comp"
      }
    };
  },

  methods: {
    getEntrantById(id) {
      return this.$store.getters.getAspirants.filter(
        aspirant => aspirant._id == id
      )[0];
    },
    formater(item) {
      return this.$options.filters.formatDate2(
        this.getEntrantById(this.getId)[item]
      );
    }
  }
};
</script>

<style>
</style>