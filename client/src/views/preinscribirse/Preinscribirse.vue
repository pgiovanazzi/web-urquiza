<template>
  <div>
    <section class="mb-4">
      <div class="card text-center z-depth-2 p-sm-2 p-md-4">
        <div class="card-body white-text">
          <h4 class="text-center w-responsive mx-auto mb-5">Formulario de Preinscripción</h4>

          <div class="row">
            <!--Grid column-->
            <div class="col-md-12 mb-md-0 mb-5">
              <form @submit.prevent="sendForm">
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        v-model="formPreinscribirse.name"
                        class="form-control text-white"
                        required
                      />
                      <label class>Nombre completo</label>
                    </div>
                  </div>
                </div>

                <!--Grid row-->
                <div class="row">
                  <div class="col-md-5">
                    <div class="md-form mb-0">
                      <select
                        class="browser-default custom-select text-white rounded-0"
                        v-model="formPreinscribirse.doc_type"
                        required
                      >
                        <option disabled value selected>Tipo de Documento</option>
                        <option value="DNI">DNI: Documento Nacional de Identidad</option>
                        <option value="CI">CI: Cédula de Identidad</option>
                        <option value="LE">LE: Libreta de Enrolamiento</option>
                        <option value="LC">LC: Libreta Civica</option>
                      </select>
                    </div>
                    <hr style="margin-top: 2px;" />
                  </div>
                  <div class="col-md-7">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        v-model="formPreinscribirse.dni"
                        class="form-control text-white"
                        required
                      />
                      <label class>Nro. de Documento</label>
                    </div>
                  </div>
                </div>
                <!--Grid row-->
                <!--Grid row-->
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <datepicker
                        v-model="formPreinscribirse.birth"
                        :bootstrap-styling="true"
                        class="form-control border-0"
                        input-class="text-light"
                        :format="customFormatter"
                        :language="es"
                        placeholder="Fecha de Nacimiento"
                      ></datepicker>
                    </div>
                  </div>
                </div>
                <!--Grid row-->
                <!--Grid row-->
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <select
                        v-model="formPreinscribirse.gender"
                        class="browser-default custom-select text-white rounded-0"
                        required
                      >
                        <option disabled value selected>Genero</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                        <option value="O">Otro</option>
                      </select>
                    </div>
                    <hr />
                  </div>
                </div>
                <!--Grid row-->
                <!--Grid row-->
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input
                        type="email"
                        v-model="formPreinscribirse.email"
                        class="form-control text-white"
                        required
                      />
                      <label class>Email</label>
                    </div>
                  </div>
                </div>
                <!--Grid row-->
                <!--Grid row-->
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        v-model="formPreinscribirse.phone_number"
                        class="form-control text-white"
                        required
                      />
                      <label class>Telefono</label>
                    </div>
                  </div>
                </div>
                <!--Grid row-->
                <!--Grid row-->
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <select
                        v-model="formPreinscribirse.year_ins"
                        class="browser-default custom-select text-white rounded-0"
                        required
                      >
                        <option disabled value selected>Año de inscripción</option>
                        <option v-for="year of careerYearValue" :key="year" :value="year">{{year}}</option>
                      </select>
                    </div>
                    <hr />
                  </div>
                </div>
                <!--Grid row-->
                <!--Grid row-->
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <select
                        v-model="formPreinscribirse.career"
                        class="browser-default custom-select text-white rounded-0"
                        required
                      >
                        <option disabled value selected>Carrera</option>
                        <option
                          v-for="({description, certificName}, idx) of $store.getters.getCareersInState"
                          :key="idx"
                          :value="description"
                        >{{ certificName }}</option>
                      </select>
                    </div>
                    <hr />
                  </div>
                </div>
                <!--Grid row-->
                <!--Grid row-->
                <div
                  v-if="formPreinscribirse.career && formPreinscribirse.career != 'Análisis Funcional de Sistemas Informáticos'"
                  class="row"
                >
                  <div class="col-md-6 pl-5">
                    <div class="md-form mb-0">
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          v-model="formPreinscribirse.place_career"
                          class="custom-control-input"
                          id="radioSiteCentro"
                          name="groupOfDefaultRadios"
                          value="Oroño 690"
                        />
                        <label class="custom-control-label" for="radioSiteCentro">Oroño 690 (Centro)</label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 pl-5">
                    <div class="md-form mb-0">
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          v-model="formPreinscribirse.place_career"
                          class="custom-control-input"
                          id="radioSiteSur"
                          value="Extención aulica"
                          name="groupOfDefaultRadios"
                        />
                        <label
                          class="custom-control-label"
                          for="radioSiteSur"
                        >Extención aulica (Sur)</label>
                      </div>
                    </div>
                  </div>
                </div>
                <!--Grid row-->
                <!--Grid row-->
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        v-model="formPreinscribirse.address"
                        class="form-control text-white"
                        required
                      />
                      <label class>Domicilio</label>
                    </div>
                  </div>
                </div>
                <!--Grid row-->
                <!--Grid row-->
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        v-model="formPreinscribirse.floor"
                        class="form-control text-white"
                      />
                      <label class>Piso</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        v-model="formPreinscribirse.dpt"
                        class="form-control text-white"
                        min="0"
                        max="50"
                      />
                      <label class>Departamento</label>
                    </div>
                  </div>
                </div>
                <!--Grid row-->
                <!--Grid row-->
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        v-model="formPreinscribirse.city"
                        class="form-control text-white"
                      />
                      <label class>Localidad de Residencia</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        v-model="formPreinscribirse.zip_code"
                        class="form-control text-white"
                      />
                      <label class>Código Postal</label>
                    </div>
                  </div>
                </div>
                <!--Grid row-->
                <!--Grid row-->
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form md-0">
                      <span>Otros estudios superiores</span>
                    </div>
                  </div>
                </div>
                <!--Grid row-->
                <!--Grid row-->
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form md-0">
                      <input
                        type="text"
                        v-model="formPreinscribirse.estudios_sup"
                        class="form-control text-white"
                      />
                      <label class>Indicar la carrera con mayor cantidad de años cursados</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form md-0">
                      <input
                        type="text"
                        v-model="formPreinscribirse.last_year_c"
                        class="form-control text-white"
                      />
                      <label class>Ultimo año cursado</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="md-form md-0">
                      <select
                        v-model="formPreinscribirse.career_comp"
                        class="browser-default custom-select text-white rounded-0"
                      >
                        <option value disabled selected>Estado de la carrera</option>
                        <option value="Completa">Completa</option>
                        <option value="Incompleta">Incompleta</option>
                        <option value="Cursando">Cursando</option>
                      </select>
                    </div>
                    <hr style="margin-top: -21px;" />
                  </div>
                </div>

                <div class="text-center mt-4">
                  <button v-if="!sending" class="btn btn-outline-light waves-effect">
                    <span>
                      <i class="fas fa-paper-plane"></i> Enviar
                    </span>
                  </button>
                  <button v-if="sending" class="btn btn-outline-light waves-effect" disabled>
                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                    Enviando...
                  </button>
                </div>
              </form>
            </div>
            <!--Grid column-->
          </div>
        </div>
      </div>
    </section>
    <!--Section: Contact v.2-->
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import PreinscriptionService from "../../PrescriptionService";
import PreInsSuccessComponent from "@/components/PreInsSuccessComponent.vue";

class Preinscripcion {
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
    career_comp = ""
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
  }
}

class ToastOptions {
  constructor(type, title) {
    this.type = type;
    this.title = title;
  }
}

export default {
  name: "Preinscribirse",
  components: {
    Datepicker
  },
  created() {
    this.$store.commit("SET_LAYOUT", "SimpleLayout");
  },
  data() {
    return {
      urquizaSvg: require("@/assets/Urquiza_Icon.svg"),
      es: require("../../../node_modules/vuejs-datepicker/dist/locale/translations/es"),
      sending: false,
      formPreinscribirse: new Preinscripcion(),
      careerYearValue: [
        this.getCareerYearValue(),
        this.getCareerYearValue() + 1
      ],
      toast: this.$swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 8000
      })
    };
  },
  methods: {
    async sendForm() {
      this.selectAFCareer();
      try {
        this.sending = true;
        const data = await PreinscriptionService.send(this.formPreinscribirse);
        const resMsg = await data.json();

        if (resMsg.success) {
          this.$store.commit("SUCCESS_PRE_INS", "PreInsSuccessComponent");
          this.formPreinscribirse = new Preinscripcion();
        } else {
          this.toast.fire(new ToastOptions("error", resData.message));
        }
      } catch (error) {
        this.toast.fire(
          new ToastOptions("error", "Ha ocurrido un error inesperado...")
        );
      } finally {
        this.sending = false;
      }
    },

    customFormatter(date) {
      return moment(date).format("DD/MM/YYYY");
    },

    getCareerYearValue() {
      var d = new Date();
      return d.getFullYear();
    },

    // Se podria mejorar con usando las clases
    selectAFCareer() {
      if (
        this.formPreinscribirse.career ==
        "Análisis Funcional de Sistemas Informáticos"
      )
        this.formPreinscribirse.place_career = "Oroño 690";
    }
  }
};
</script>

<style scoped>
hr {
  background-color: aliceblue !important;
  margin: 0px;
}

.card {
  background: rgba(1, 1, 1, 0.7);
}

label {
  color: aliceblue;
}

input[type="text"]:focus:not([readonly]),
input[type="number"]:focus:not([readonly]),
input[type="email"]:focus:not([readonly]) {
  border-bottom: 1px solid #6096cc;
  box-shadow: 0 1px 0 0 #6096cc;
}

input[type="text"]:focus:not([readonly]) + label,
input[type="number"]:focus:not([readonly]) + label,
input[type="email"]:focus:not([readonly]) + label {
  color: #6096cc;
}

label.active {
  color: #6096cc;
}

.prefix.active {
  color: #6096cc;
}

select {
  background-color: transparent;
  border: none;
  outline: none;
  -webkit-appearance: none;
}

option {
  background-color: rgba(18, 51, 78, 0.959);
}

.md-form ::placeholder {
  color: aliceblue;
}
</style>
