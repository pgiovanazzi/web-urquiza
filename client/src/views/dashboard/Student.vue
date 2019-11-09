<template>
  <div class="container">
    <div class="row text-center" v-if="isStudentView">
      <div class="col-md-6">
        <!--Table-->
        <table id="tablePreview" class="table table-hover table-bordered shadow">
          <!--Table head-->
          <thead>
            <tr>
              <th scope="col">
                <h3>Información del Alumno</h3>
                <small>
                  <samp>Fecha de registro: {{ $store.getters.getStudentsById(getId).signupDate | formatDate2 }}</samp>
                </small>
              </th>
            </tr>
          </thead>
          <!--Table head-->
          <!--Table body-->
          <tbody>
            <tr v-for="(item, idx) in studentData" :key="idx">
              <td>
                <p>
                  <strong>{{ idx }}:</strong>
                  {{ item == 'birth' ? formater(item) : $store.getters.getStudentsById(getId)[item] }}
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
                  <tr v-for="(item, idx) in studentDataCareer" :key="idx">
                    <td>
                      <p>
                        <strong>{{ idx }}:</strong>
                        {{ $store.getters.getStudentsById(getId)[item] }}
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
                  <tr v-for="(item, idx) in studentDataOtherCareer" :key="idx">
                    <td>
                      <p>
                        <strong>{{ idx }}:</strong>
                        {{ $store.getters.getStudentsById(getId)[item] }}
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
                class="btn btn-outline-default waves-effect btn-block"
                @click="editStudent(getId)"
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
                @click="removeStudent(getId)"
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
import { StudentsService } from "@/services";

class ToastOptions {
  constructor(type, title) {
    this.type = type;
    this.title = title;
  }
}

export default {
  name: "Student",
  computed: {
    getId() {
      return this.$route.params.id;
    },

    isStudentView() {
      return this.$route.name == "Student";
    }
  },
  data() {
    return {
      studentData: {
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
      studentDataCareer: {
        "Año de incripción": "year_ins",
        Titulo: "career",
        Establecimiento: "place_career"
      },
      studentDataOtherCareer: {
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
        this.$store.getters.getStudentsById(this.getId)[item]
      );
    },

    editStudent(id) {
      this.$router.push(`/panel/alumno/${id}/modificar`);
    },

    async removeStudent(id) {
      try {
        const data = await StudentsService.delete(id);
        const resData = await data.json();

        if (resData.success) {
          this.toast.fire(new ToastOptions("success", resData.message));
          this.$router.push("/panel/alumnos");
        } else {
          this.toast.fire(new ToastOptions("error", resData.message));
        }
      } catch (error) {
        this.toast.fire(
          new ToastOptions("error", "Error de servicio de alumnos.")
        );
      }
    }
  }
};
</script>

<style>
</style>