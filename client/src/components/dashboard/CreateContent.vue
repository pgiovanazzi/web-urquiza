<template>
  <div>
    <div
      class="modal fade"
      id="createContent"
      tabindex="-1"
      role="dialog"
      aria-labelledby="content"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h4 class="modal-title w-100 font-weight-bold">Crear Contenido</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="sendNewContent" class="md-form">
            <div class="modal-body mx-3">
              <div v-if="$route.path === '/panel/paginas'">
                <select
                  class="browser-default custom-select form-control mb-2 p-2"
                  v-model="newContent.section"
                  required
                >
                  <option value disabled>Seleccione la sección</option>
                  <option value="INSTITUCIONAL">Institucional</option>
                  <option value="INGRESANTES">Ingresantes</option>
                  <option value="CARRERAS">Carreras</option>
                </select>
              </div>
              <div class="md-form">
                <i class="fas fa-file-alt prefix"></i>
                <input
                  type="text"
                  v-model.trim="newContent.description"
                  class="form-control validate"
                  required
                />
                <label data-error="error" data-success="correcto"
                  >Título de la publicación</label
                >
              </div>

              <div class="md-form" v-if="newContent.section === 'CARRERAS'">
                <i class="fas fa-file-alt prefix"></i>
                <input
                  type="text"
                  v-model.trim="newContent.certificName"
                  class="form-control validate"
                  required
                />
                <label data-error="error" data-success="correcto"
                  >Título de la carrera</label
                >
              </div>

              <div class="md-form" v-if="newContent.section === 'CARRERAS'">
                <i class="fas fa-file-alt prefix"></i>
                <input
                  type="text"
                  v-model.trim="newContent.years"
                  class="form-control validate"
                  required
                />
                <label data-error="error" data-success="correcto"
                  >Años de cursado</label
                >
              </div>

              <div v-if="newContent.section === 'CARRERAS'">
                <select
                  class="browser-default custom-select form-control mb-2 p-2"
                  :value="newContent.time"
                  required
                >
                  <option value disabled>Turno</option>
                  <option value="M">Mañana</option>
                  <option value="T">Tarde</option>
                  <option value="N">Noche</option>
                </select>
              </div>

              <div class="md-form" v-if="newContent.section === 'CARRERAS'">
                <input
                  type="file"
                  style="display: none"
                  @change="onFileSelectedPlan"
                  ref="fileStudyPlan"
                  required
                />
                <div class="custom-file text-center">
                  <button
                    type="button"
                    class="btn btn-outline-primary waves-effect btn-large"
                    @click="$refs.fileStudyPlan.click()"
                  >
                    <i class="fas fa-upload"></i>
                    {{ planFileName }}
                  </button>
                </div>
              </div>

              <div class="md-form" v-if="newContent.section === 'CARRERAS'">
                <input
                  type="file"
                  style="display: none"
                  @change="onFileSelectedIcon"
                  ref="fileIconCareer"
                  required
                />
                <div class="custom-file text-center mb-3">
                  <button
                    type="button"
                    class="btn btn-outline-primary waves-effect btn-large"
                    @click="$refs.fileIconCareer.click()"
                  >
                    <i class="fas fa-upload"></i>
                    {{ iconFileName }}
                  </button>
                </div>
              </div>

              <CKEditor :contentData="newContent.content" />

              <div class="md-from m-3">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    v-model="newContent.published"
                    class="custom-control-input form-control"
                    id="defaultIndeterminate2"
                  />
                  <label
                    @click.native="publishedState()"
                    class="custom-control-label"
                    for="defaultIndeterminate2"
                    >Publicado</label
                  >
                </div>
              </div>
              <div class="md-form">
                <i class="fas fa-pencil-alt prefix"></i>
                <input
                  type="text"
                  v-model.trim="newContent.metaDescription"
                  class="form-control validate"
                />
                <label data-error="error" data-success="correcto"
                  >Meta descripción</label
                >
              </div>

              <div class="md-form">
                <i class="fas fa-tags prefix"></i>
                <input
                  type="text"
                  v-model.trim="newContent.metaLabel"
                  class="form-control validate"
                />
                <label data-error="error" data-success="correcto"
                  >Meta etiqueta</label
                >
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <button class="btn btn-outline-elegant waves-effect">
                Crear contenido
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from "@/services/PostsService.js";
import PagesService from "@/services/PagesService.js";
import CareersService from "@/services/CareersService.js";
import CKEditor from "@/components/dashboard/CKEditor.vue";
import { mapActions } from "vuex";

class ContentCreated {
  constructor(
    description = "",
    content = "",
    published = true,
    section = "",
    metaDescription = "",
    metaLabel = ""
  ) {
    this.description = description;
    this.content = content;
    this.published = published;
    this.section = section;
    this.metaDescription = metaDescription;
    this.metaLabel = metaLabel;
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
  name: "CreateContent",
  components: {
    CKEditor
  },
  data() {
    return {
      newContent: {},
      planFileName: null,
      iconFileName: null
    };
  },
  watch: {
    $route(to, from) {
      this.newContent = new ContentCreated();
    }
  },
  mounted() {
    this.newContent = new ContentCreated();
    this.setDataFilesName();
  },
  methods: {
    ...mapActions(["getPosts", "getPages", "getCareers"]),

    publishedState() {
      this.newContent.published = !this.newContent.published;
    },

    setDataFilesName() {
      this.planFileName = "Seleccione el archivo del plan de estudio";
      this.iconFileName = "Seleccione el logo de la carrera";
    },

    async sendNewContent() {
      try {
        this.newContent.content = this.$store.getters.getEditorContent;

        const data =
          this.$route.path === "/panel/novedades"
            ? await PostsService.send(this.newContent)
            : !this.newContent.studyPlanFile
            ? await PagesService.send(this.newContent)
            : await CareersService.send(this.newContent);

        const resData = await data.json();

        if (resData.success) {
          this.getPosts();
          this.getPages();
          this.getCareers();

          this.$swal.fire(new SwitAletOptions(resData.message, "success"));

          this.newContent = new ContentCreated();
          this.$store.commit("SET_EDITOR_CONTENT", null);
          this.setDataFilesName();
        } else {
          this.$swal.fire(new SwitAletOptions(resData.message, "error"));
        }
      } catch (error) {
        this.$swal.fire(
          new SwitAletOptions(
            this.$route.path === "/panel/novedades"
              ? "Error de servicio de novedades."
              : "Error de servicio de paginas.",
            "error"
          )
        );
      }
    },

    onFileSelectedPlan(event) {
      this.planFileName = event.target.files[0].name;
      this.newContent.studyPlanFile = event.target.files[0];
    },

    onFileSelectedIcon(event) {
      this.iconFileName = event.target.files[0].name;
      this.newContent.logotype = event.target.files[0];
    }
  }
};
</script>
