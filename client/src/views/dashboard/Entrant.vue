<template>
  <div>
    <div class="row text-center" v-if="isAspirantView">
      <div class="col-md-6">
        <!--Table-->
        <table id="tablePreview" class="table table-hover table-bordered shadow">
          <!--Table head-->
          <thead>
            <tr>
              <th scope="col">
                <h3>Información del Aspirante</h3>
                <small>
                  <samp>Fecha de registro: {{ $store.getters.getAspirantById(getId).signupDate | formatDate2 }}</samp>
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
                  {{ item == 'birth'? formater(item) : $store.getters.getAspirantById(getId)[item] }}
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
                      <h3>Carrera</h3>
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
                        {{ $store.getters.getAspirantById(getId)[item] }}
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
                        {{ $store.getters.getAspirantById(getId)[item] }}
                      </p>
                    </td>
                  </tr>
                </tbody>
                <!--Table body-->
              </table>
              <!--Table-->
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-12">
              <button
                type="button"
                class="btn btn-outline-success waves-effect btn-block"
                @click="updateAsStudent(getId)"
              >
                <i class="fas fa-user-check"></i>
                Registrar como Alumno
              </button>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <button
                type="button"
                class="btn btn-outline-default waves-effect btn-block"
                @click="editAspirant(getId)"
              >
                <i class="fas fa-user-cog"></i> Modificar
              </button>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <button
                type="button"
                class="btn btn-outline-danger waves-effect btn-block"
                @click="removeAspirant(getId)"
              >
                <i class="fas fa-user-times"></i>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { AspirantsService } from "@/services";

class ToastOptions {
  constructor(type, title) {
    this.type = type;
    this.title = title;
  }
}

export default {
  name: "Entrant",
  computed: {
    getId() {
      return this.$route.params.id;
    },

    isAspirantView() {
      return this.$route.path == "/panel/aspirante/" + this.getId;
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
        "Año de incripción": "year_ins",
        Titulo: "career",
        Establecimiento: "place_career"
      },
      aspirantDataOtherStudies: {
        Carrera: "estudios_sup",
        "Ultimo año cursado": "last_year_c",
        "Estado de la carrera": "career_comp"
      },
      toast: this.$swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 8000
      })
    };
  },

  methods: {
    formater(item) {
      return this.$options.filters.formatDate2(
        this.$store.getters.getAspirantById(this.getId)[item]
      );
    },

    updateAsStudent(id) {
      console.log(id);
    },

    editAspirant(id) {
      this.$router.push(`/panel/aspirante/${id}/modificar`);
    },

    async removeAspirant(id) {
      try {
        const data = await AspirantsService.delete(id);
        const resData = await data.json();

        if (resData.success) {
          this.toast.fire(new ToastOptions("success", resData.message));
          this.$router.push("/panel/aspirantes");
        } else {
          this.toast.fire(new ToastOptions("error", resData.message));
        }
      } catch (error) {
        this.toast.fire(
          new ToastOptions("error", "Error de servicio de novedades.")
        );
      }
    }
  }
};
</script>

<style>
</style>