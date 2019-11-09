<template>
  <div v-if="dataEntity">
    <div class="container">
      <form class="text-center">
        <div class="row">
          <div class="col-md-6">
            <!--Table-->
            <table id="tablePreview" class="table table-hover table-bordered shadow">
              <!--Table head-->
              <thead>
                <tr>
                  <th scope="col">
                    <h3>Modificar datos del Aspirante</h3>
                    <small>
                      <samp>Fecha de registro: {{ dataEntity.signupDate | formatDate2 }}</samp>
                    </small>
                  </th>
                </tr>
              </thead>
              <!--Table head-->

              <!--Table body-->
              <tbody>
                <tr>
                  <td>
                    <strong>Nombre y Apellido:</strong>
                    <input class="form-control" v-model="dataEntity.name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Tipo de documento:</strong>
                    <select
                      class="browser-default custom-select"
                      v-model="dataEntity.doc_type"
                      required
                    >
                      <option value="DNI">DNI: Documento Nacional de Identidad</option>
                      <option value="CI">CI: Cédula de Identidad</option>
                      <option value="LE">LE: Libreta de Enrolamiento</option>
                      <option value="LC">LC: Libreta Civica</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Nro. de documento:</strong>
                    <input class="form-control" v-model="dataEntity.dni" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Fecha de nacimiento:</strong>
                    <datepicker
                      v-model="dataEntity.birth"
                      :bootstrap-styling="true"
                      :format="customFormatter"
                      :language="es"
                      placeholder="Fecha de Nacimiento"
                    ></datepicker>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Genero:</strong>
                    <select
                      v-model="dataEntity.gender"
                      class="browser-default custom-select"
                      required
                    >
                      <option value="M">Masculino</option>
                      <option value="F">Femenino</option>
                      <option value="O">Otro</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>E-mail:</strong>
                    <input class="form-control" v-model="dataEntity.email" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Numero de telefono:</strong>
                    <input class="form-control" v-model="dataEntity.phone_number" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Dirección:</strong>
                    <input class="form-control" v-model="dataEntity.address" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Piso:</strong>
                    <input class="form-control" v-model="dataEntity.floor" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Departamento:</strong>
                    <input class="form-control" v-model="dataEntity.dpt" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Ciudad:</strong>
                    <input class="form-control" v-model="dataEntity.city" />
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
                          <h3>Modificar carrera</h3>
                          <br />
                        </th>
                      </tr>
                    </thead>
                    <!--Table head-->
                    <!--Table body-->
                    <tbody>
                      <tr>
                        <td>
                          <strong>Año de incripción:</strong>
                          <select
                            v-model="dataEntity.year_ins"
                            class="browser-default custom-select"
                            required
                          >
                            <option
                              v-for="year of careerYearValue"
                              :key="year"
                              :value="year"
                            >{{year}}</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Título:</strong>
                          <select
                            v-model="dataEntity.career"
                            class="browser-default custom-select"
                            required
                          >
                            <option
                              v-for="({description, certificName}, idx) of $store.getters.getCareersInState"
                              :key="idx"
                              :value="description"
                            >{{ certificName }}</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Establecimiento:</strong>
                          <select
                            v-model="dataEntity.place_career"
                            class="browser-default custom-select"
                            required
                          >
                            <option value="Oroño 690">Oroño 690</option>
                            <option value="Extención aulica">Extención aulica (Sur)</option>
                          </select>
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
                          <h3>Modificar otros estudios superiores</h3>
                          <br />
                        </th>
                      </tr>
                    </thead>
                    <!--Table head-->
                    <!--Table body-->
                    <tbody>
                      <tr>
                        <td>
                          <strong>Carrera:</strong>
                          <input class="form-control" v-model="dataEntity.estudios_sup" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Ultimo año cursado:</strong>
                          <input class="form-control" v-model="dataEntity.last_year_c" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Estado de la carrera:</strong>
                          <select
                            v-model="dataEntity.career_comp"
                            class="browser-default custom-select"
                            required
                          >
                            <option value="Completa">Completa</option>
                            <option value="Incompleta">Incompleta</option>
                            <option value="Cursando">Cursando</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                    <!--Table body-->
                  </table>
                  <!--Table-->
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <button
                    type="button"
                    class="btn btn-outline-success waves-effect btn-block"
                    @click="uploadData()"
                  >
                    <i class="fas fa-user-edit"></i> Actualizar datos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { AspirantsService, StudentsService } from "@/services";

class ToastOptions {
  constructor(type, title) {
    this.type = type;
    this.title = title;
  }
}

export default {
  name: "EditEntrantsAndStudents",
  components: {
    Datepicker
  },
  computed: {
    getId() {
      return this.$route.params.id;
    },

    setEntity() {
      if (this.$route.name == "EntrantEdit")
        return this.$store.getters.getAspirantById(this.getId);
      return this.$store.getters.getStudentsById(this.getId);
    }
  },
  data() {
    return {
      dataEntity: null,
      careerYearValue: [
        this.getCareerYearValue(),
        this.getCareerYearValue() + 1
      ],
      es: require("../../../node_modules/vuejs-datepicker/dist/locale/translations/es"),
      toast: this.$swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 8000
      })
    };
  },

  mounted() {
    this.dataEntity = this.setEntity;
  },

  methods: {
    formater(item) {
      return this.$options.filters.formatDate2(
        this.$store.getters.getAspirantById(this.getId)[item]
      );
    },

    customFormatter(date) {
      return moment(date).format("DD/MM/YYYY");
    },

    getCareerYearValue() {
      var d = new Date();
      return d.getFullYear();
    },

    choseService(id) {
      return this.$route.name == "EntrantEdit"
        ? AspirantsService.update(id, this.dataEntity)
        : StudentsService.update(id, this.dataEntity);
    },

    async uploadData() {
      try {
        const data = await this.choseService(this.dataEntity._id);
        const resData = await data.json();

        if (resData.success) {
          this.$store.dispatch("getAspirants");

          this.toast.fire(new ToastOptions("success", resData.message));

          this.$route.name == "EntrantEdit"
            ? this.$router.push(`/panel/aspirante/${this.dataEntity._id}`)
            : this.$router.push(`/panel/alumno/${this.dataEntity._id}`);
        } else {
          this.toast.fire(new ToastOptions("error", resData.message));
        }
      } catch (error) {
        this.toast.fire(
          new ToastOptions(
            "error",
            `Error de servicio de ${
              this.$route.name == "EntrantEdit" ? "aspirantes" : "alumnos"
            }.`
          )
        );
      }
    }
  }
};
</script>