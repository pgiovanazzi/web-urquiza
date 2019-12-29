<template>
  <div>
    <div class="container" v-if="dataInstitute">
      <strong class="mb-5">{{ dataInstitute.description }}</strong>
      <ul class="nav nav-tabs mt-3" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link btn btn-outline-link waves-effect pl-3 pr-3 active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            >Datos de la institución</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link btn btn-outline-link waves-effect pl-3 pr-3"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            >Preguntas Frecuentes</a
          >
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <form>
            <div class="row mt-4">
              <div class="col-md-6">
                <h4 class="mb-4">Video Header</h4>
                <p class="mb-2">
                  {{ dataInstitute.header.description }}
                </p>
                <!-- Grid row -->
                <div class="form-group row">
                  <!-- Material input -->
                  <label for="titleMask" class="col-sm-5 col-form-label"
                    >Máscara de título</label
                  >
                  <div class="col-sm-10">
                    <div class="md-form mt-0">
                      <input
                        type="text"
                        class="form-control"
                        id="titleMask"
                        v-model="dataInstitute.header.titleMask"
                        placeholder="Máscara de título"
                      />
                    </div>
                  </div>
                </div>
                <!-- Grid row -->
                <div class="form-group row">
                  <!-- Material input -->
                  <label for="titleDesc" class="col-sm-5 col-form-label"
                    >Máscara Descripción</label
                  >
                  <div class="col-sm-10">
                    <div class="md-form mt-0">
                      <textarea
                        class="md-textarea form-control"
                        id="titleDesc"
                        v-model="dataInstitute.header.descriptionMask"
                        placeholder="Máscara de descripción"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h4 class="mb-4">Contacto</h4>
                <p class="mb-2">
                  {{ dataInstitute.contact.description }}
                </p>
                <!-- Grid row -->
                <div class="form-group row">
                  <!-- Material input -->
                  <label for="contactDesc" class="col-sm-5 col-form-label"
                    >Subtitulo de contacto</label
                  >
                  <div class="col-sm-10">
                    <div class="md-form mt-0">
                      <textarea
                        class="md-textarea form-control"
                        id="contactDesc"
                        v-model="dataInstitute.contact.subTitle"
                        placeholder="Subtitulo de contacto"
                      />
                    </div>
                  </div>
                </div>
                <!-- Grid row -->
                <div class="form-group row">
                  <!-- Material input -->
                  <label for="dirContact" class="col-sm-5 col-form-label"
                    >Dirección de contacto</label
                  >
                  <div class="col-sm-10">
                    <div class="md-form mt-0">
                      <input
                        type="text"
                        class="form-control"
                        id="dirContact"
                        v-model="dataInstitute.contact.site.address"
                        placeholder="Dirección de contacto"
                      />
                    </div>
                  </div>
                </div>
                <!-- Grid row -->
                <div class="form-group row">
                  <!-- Material input -->
                  <label for="floorContact" class="col-sm-5 col-form-label"
                    >Piso</label
                  >
                  <div class="col-sm-10">
                    <div class="md-form mt-0">
                      <input
                        type="text"
                        class="form-control"
                        id="floorContact"
                        v-model="dataInstitute.contact.site.floor"
                        placeholder="Piso"
                      />
                    </div>
                  </div>
                </div>
                <!-- Grid row -->
                <div class="form-group row">
                  <!-- Material input -->
                  <label for="numContact1" class="col-sm-5 col-form-label"
                    >Número de contacto 1</label
                  >
                  <div class="col-sm-10">
                    <div class="md-form mt-0">
                      <input
                        type="text"
                        class="form-control"
                        id="numContact1"
                        v-model="dataInstitute.contact.phone.phone1"
                        placeholder="Número de contacto"
                      />
                    </div>
                  </div>
                </div>
                <!-- Grid row -->
                <div class="form-group row">
                  <!-- Material input -->
                  <label for="numContact2" class="col-sm-5 col-form-label"
                    >Número de contacto 2</label
                  >
                  <div class="col-sm-10">
                    <div class="md-form mt-0">
                      <input
                        type="text"
                        class="form-control"
                        id="numContact2"
                        v-model="dataInstitute.contact.phone.phone2"
                        placeholder="Número de contacto"
                      />
                    </div>
                  </div>
                </div>
                <!-- Grid row -->
                <div class="form-group row">
                  <!-- Material input -->
                  <label for="emailContact" class="col-sm-5 col-form-label"
                    >Email de contacto</label
                  >
                  <div class="col-sm-10">
                    <div class="md-form mt-0">
                      <input
                        type="email"
                        class="form-control"
                        id="emailContact"
                        v-model="dataInstitute.contact.email"
                        placeholder="Email de contacto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-md-12">
                <h4 class="mb-4">Secretaría Académica</h4>
                <p class="mb-2">
                  {{ dataInstitute.academicSecretary.description }}
                </p>
                <div class="form-group">
                  <!-- Grid row -->
                  <div class="form-group row">
                    <!-- Material input -->
                    <label
                      for="secretaryAcademic"
                      class="col-sm-5 col-form-label"
                      >Información de la secretaria académica</label
                    >
                    <div class="col-sm-10">
                      <div class="md-form mt-0">
                        <textarea
                          class="md-textarea form-control"
                          id="secretaryAcademic"
                          v-model="dataInstitute.academicSecretary.content"
                          placeholder="Información de la secretaria académica"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              class="btn btn-outline-info waves-effect btn-block"
              @click.prevent="updateDataInstitute()"
            >
              <i class="fas fa-magic mr-1"></i>
              Actualizar datos
            </button>
          </form>
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div class="row">
            <div class="col-md-12">
              <FQAs />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { InstituteInfoService } from "@/services";
import { mapGetters, mapActions } from "vuex";
import FQAs from "@/components/dashboard/FQAs.vue";

class ToastOptions {
  constructor(type, title) {
    this.type = type;
    this.title = title;
  }
}

export default {
  name: "ConfigInstitute",
  components: {
    FQAs
  },
  data() {
    return {
      dataInstitute: null,
      es: require("../../../node_modules/vuejs-datepicker/dist/locale/translations/es"),
      toast: this.$swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 8000
      })
    };
  },

  async mounted() {
    await this.getInstituteInfo();
    this.dataInstitute = this.$store.getters.getInstituteInfo[0];
  },
  methods: {
    ...mapActions(["getInstituteInfo"]),

    async updateDataInstitute() {
      try {
        const data = await InstituteInfoService.partialUpdate(
          this.$store.getters.getInstituteInfo[0]._id,
          this.dataInstitute
        );
        const resData = await data.json();

        if (resData.success) {
          this.getInstituteInfo();
          this.toast.fire(new ToastOptions("success", resData.message));
        } else {
          this.toast.fire(new ToastOptions("error", resData.message));
        }
      } catch (error) {
        this.toast.fire(
          new ToastOptions(
            "error",
            `Error de servicio de actualizacón de datos de la institución`
          )
        );
      }
    }
  }
};
</script>

<style></style>
