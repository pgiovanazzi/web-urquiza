<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade right"
      id="new-student"
      tabindex="-1"
      role="dialog"
      aria-labelledby="new-studentLabel"
      aria-hidden="true"
      ref="modalStudent"
    >
      <div
        class="modal-dialog modal-lg  modal-full-height modal-right"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="new-studentLabel">
              Registrar nuevo alumno
            </h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="sendNewStudent" class="text-center">
            <div class="modal-body">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <!--Table-->
                    <table
                      id="tablePreview"
                      class="table table-hover table-bordered shadow"
                    >
                      <!--Table head-->
                      <thead>
                        <tr>
                          <th scope="col">
                            <h4>Datos del alumno</h4>
                          </th>
                        </tr>
                      </thead>
                      <!--Table head-->

                      <!--Table body-->
                      <tbody>
                        <tr>
                          <td>
                            <strong>Nombre y Apellido:</strong>
                            <input
                              class="form-control"
                              v-model="newStudent.name"
                              required
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Tipo de documento:</strong>
                            <select
                              class="browser-default custom-select"
                              v-model="newStudent.doc_type"
                              required
                            >
                              <option value="DNI"
                                >DNI: Documento Nacional de Identidad</option
                              >
                              <option value="CI"
                                >CI: Cédula de Identidad</option
                              >
                              <option value="LE"
                                >LE: Libreta de Enrolamiento</option
                              >
                              <option value="LC">LC: Libreta Civica</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Nro. de documento:</strong>
                            <input
                              class="form-control"
                              v-model="newStudent.dni"
                              required
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Fecha de nacimiento:</strong>
                            <datepicker
                              v-model="newStudent.birth"
                              :bootstrap-styling="true"
                              :format="customFormatter"
                              :language="es"
                            ></datepicker>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Genero:</strong>
                            <select
                              v-model="newStudent.gender"
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
                            <input
                              class="form-control"
                              v-model="newStudent.email"
                              required
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Numero de telefono:</strong>
                            <input
                              class="form-control"
                              v-model="newStudent.phone_number"
                              required
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Dirección:</strong>
                            <input
                              class="form-control"
                              v-model="newStudent.address"
                              required
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Piso:</strong>
                            <input
                              class="form-control"
                              v-model="newStudent.floor"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Departamento:</strong>
                            <input
                              class="form-control"
                              v-model="newStudent.dpt"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Ciudad:</strong>
                            <input
                              class="form-control"
                              v-model="newStudent.city"
                              required
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Codigo Postal:</strong>
                            <input
                              class="form-control"
                              v-model="newStudent.zip_code"
                              required
                            />
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
                          <table
                            id="tablePreview"
                            class="table table-hover table-bordered shadow"
                          >
                            <!--Table head-->
                            <thead>
                              <tr>
                                <th scope="col">
                                  <h4>Datos de la carrera</h4>
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
                                    v-model="newStudent.year_ins"
                                    class="browser-default custom-select"
                                    required
                                  >
                                    <option
                                      v-for="year of careerYearValue"
                                      :key="year"
                                      :value="year"
                                      >{{ year }}</option
                                    >
                                  </select>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Título:</strong>
                                  <select
                                    v-model="newStudent.career"
                                    class="browser-default custom-select"
                                    required
                                  >
                                    <option
                                      v-for="({ description, certificName },
                                      idx) of $store.getters.getCareersInState"
                                      :key="idx"
                                      :value="description"
                                      >{{ certificName }}</option
                                    >
                                  </select>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Establecimiento:</strong>
                                  <select
                                    v-model="newStudent.place_career"
                                    class="browser-default custom-select"
                                    required
                                  >
                                    <option value="Oroño 690">Oroño 690</option>
                                    <option value="Extención aulica"
                                      >Extención aulica (Sur)</option
                                    >
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
                          <table
                            id="tablePreview"
                            class="table table-hover table-bordered shadow"
                          >
                            <!--Table head-->
                            <thead>
                              <tr>
                                <th scope="col">
                                  <h4>Otros estudios superiores</h4>
                                </th>
                              </tr>
                            </thead>
                            <!--Table head-->
                            <!--Table body-->
                            <tbody>
                              <tr>
                                <td>
                                  <strong>Carrera:</strong>
                                  <input
                                    class="form-control"
                                    v-model="newStudent.estudios_sup"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Ultimo año cursado:</strong>
                                  <input
                                    class="form-control"
                                    v-model="newStudent.last_year_c"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Estado de la carrera:</strong>
                                  <select
                                    v-model="newStudent.career_comp"
                                    class="browser-default custom-select"
                                  >
                                    <option value="Completa">Completa</option>
                                    <option value="Incompleta"
                                      >Incompleta</option
                                    >
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <button class="btn btn-outline-elegant waves-effect">
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Modal -->
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { StudentsService } from "@/services";

class Student {
  constructor(
    name = "",
    doc_type = "",
    dni = "",
    birth = "",
    gender = "",
    email = "",
    phone_number = "",
    year_ins = "",
    career = "",
    place_career = "",
    address = "",
    floor = "",
    dpt = "",
    city = "",
    zip_code = "",
    estudios_sup = "",
    last_year_c = "",
    career_comp = "",
    state = ""
  ) {
    this.name = name;
    this.doc_type = doc_type;
    this.dni = dni;
    this.birth = birth;
    this.gender = gender;
    this.email = email;
    this.phone_number = phone_number;
    this.year_ins = year_ins;
    this.career = career;
    this.place_career = place_career;
    this.address = address;
    this.floor = floor;
    this.dpt = dpt;
    this.city = city;
    this.zip_code = zip_code;
    this.estudios_sup = estudios_sup;
    this.last_year_c = last_year_c;
    this.career_comp = career_comp;
    this.state = state;
  }
}

class SwitAletOptions {
  constructor(title, type) {
    this.title = title;
    this.type = type;
    this.confirmButtonText = "Aceptar";
    this.customClass = {
      confirmButton: "btn btn-outline-elegant waves-effect rounded-0"
    };
  }
}

export default {
  name: "NewStudent",

  components: {
    Datepicker
  },

  data() {
    return {
      newStudent: new Student(),
      careerYearValue: [
        this.getCareerYearValue(),
        this.getCareerYearValue() + 1
      ],
      es: require("../../../node_modules/vuejs-datepicker/dist/locale/translations/es")
    };
  },

  methods: {
    customFormatter(date) {
      return moment(date).format("DD/MM/YYYY");
    },

    getCareerYearValue() {
      var d = new Date();
      return d.getFullYear();
    },

    async sendNewStudent() {
      try {
        const data = await StudentsService.add(this.newStudent);
        const resData = await data.json();

        if (resData.success) {
          this.$store.dispatch("getStudents");

          this.$swal.fire(new SwitAletOptions(resData.message, "success"));
          this.newStudent = new Student();
          $(this.$refs.modalStudent).modal("hide");
        } else {
          this.$swal.fire(new SwitAletOptions(resData.message, "error"));
        }
      } catch (error) {
        this.$swal.fire(
          new SwitAletOptions("Error de servicio de alumnos.", "error")
        );
      }
    }
  }
};
</script>
