<template>
  <div>
    <h3>Editar publicación</h3>
    <form v-if="contentData" @submit.prevent="sendEditContent">
      <div class="md-form">
        <i class="fas fa-file-alt prefix"></i>
        <input
          type="text"
          v-model.trim="contentData.description"
          class="form-control validate"
          required
          ref="description"
        />
        <label data-error="error" data-success="correcto">Descripción o nombre</label>
      </div>

      <div class="md-form" v-if="contentData.certificName">
        <i class="fas fa-file-alt prefix"></i>
        <input
          type="text"
          v-model.trim="contentData.certificName"
          class="form-control validate"
          required
        />
        <label data-error="error" data-success="correcto">Título de la carrera</label>
      </div>

      <div class="md-form" v-if="contentData.years">
        <i class="fas fa-file-alt prefix"></i>
        <input type="text" v-model.trim="contentData.years" class="form-control validate" required />
        <label data-error="error" data-success="correcto">Años de cursado</label>
      </div>

      <input type="file" style="display: none" @change="onFileSelectedPlan" ref="fileStudyPlan" />

      <div class="md-form" v-if="contentData.studyPlanFile">
        <div class="custom-file text-center">
          <a
            class="btn btn-link"
            :href="planPdf"
            target="_blank"
          >{{ contentData.studyPlanFile.slice(25,) }}</a>
          <button
            class="btn btn-outline-primary waves-effect btn-large"
            @click="$refs.fileStudyPlan.click()"
          >
            <i class="fas fa-upload"></i>
            {{ planFileName }}
          </button>
        </div>
      </div>

      <input type="file" style="display: none" @change="onFileSelectedIcon" ref="fileIconCareer" />

      <div class="md-form mb-5" v-if="contentData.logotype">
        <div class="custom-file text-center">
          <div class="container">
            <div class="row flex-center">
              <img :src="iconImg" :alt="contentData.description" style="height: 8rem" />
              <button
                class="btn btn-outline-primary waves-effect btn-large"
                @click="$refs.fileIconCareer.click()"
              >
                <i class="fas fa-upload"></i>
                {{ iconFileName }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <wysiwyg v-model="contentData.content" />

      <div class="md-from mt-3">
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            v-model="contentData.published"
            class="custom-control-input"
            id="defaultIndeterminate2"
          />
          <label
            @click="publishedState()"
            class="custom-control-label"
            for="defaultIndeterminate2"
          >Publicado</label>
        </div>
      </div>

      <div class="md-form">
        <i class="fas fa-pencil-alt prefix"></i>
        <input type="text" v-model.trim="contentData.metaDescription" class="form-control validate" />
        <label data-error="error" data-success="correcto" ref="metaDescription">Meta descripción</label>
      </div>

      <div class="md-form">
        <i class="fas fa-tags prefix"></i>
        <input
          type="text"
          v-model.trim="contentData.metaLabel"
          class="form-control validate"
          ref="metaLabel"
        />
        <label data-error="error" data-success="correcto">Meta etiqueta</label>
      </div>

      <div class="d-flex justify-content-center">
        <button class="btn btn-outline-elegant waves-effect">Modificar contenido</button>
      </div>
    </form>
  </div>
</template>

<script>
import PostsService from "@/services/PostsService.js";
import PagesService from "@/services/PagesService.js";
import CareersService from "@/services/CareersService.js";

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
  name: "EditPageAndNews",
  created() {
    this.$store.dispatch("getPosts");
    this.$store.dispatch("getPages");
    this.$store.dispatch("getCareers");

    if (this.$store.getters.getPostByAlias(this.$route.params.id))
      this.contentData = this.$store.getters.getPostByAlias(
        this.$route.params.id
      );
    if (this.$store.getters.getPageByAlias(this.$route.params.id))
      this.contentData = this.$store.getters.getPageByAlias(
        this.$route.params.id
      );
    if (this.$store.getters.getCareerByAlias(this.$route.params.id))
      this.contentData = this.$store.getters.getCareerByAlias(
        this.$route.params.id
      );

    this.iconImg = this.contentData.logotype
      ? require(`@/../../uploaded-files/${this.contentData.logotype}`)
      : null;
    this.planPdf = this.contentData.studyPlanFile
      ? "/uploaded-files/" + this.contentData.studyPlanFile
      : null;
  },

  mounted() {
    this.focusInput();
  },

  data() {
    return {
      contentData: {},
      planFileName: "Cambiar archivo del plan de estudio",
      iconFileName: "Cambiar icono de la carrera",
      planPdf: null,
      iconImg: null
    };
  },

  methods: {
    publishedState() {
      this.contentData.published = !this.contentData.published;
    },

    focusInput() {
      this.$refs.description.focus();
    },

    async sendEditContent() {
      try {
        const data =
          this.contentData.section === "CARRERAS"
            ? await CareersService.edit(this.contentData, this.contentData._id)
            : this.contentData.section
            ? await PagesService.edit(this.contentData, this.contentData._id)
            : await PostsService.edit(this.contentData, this.contentData._id);

        const resData = await data.json();

        if (resData.success) {
          this.$store.dispatch("getPosts");
          this.$store.dispatch("getPages");
          this.$store.dispatch("getCareers");

          this.$swal.fire(new SwitAletOptions(resData.message, "success"));

          this.contentData.section
            ? this.$router.push("/panel/paginas")
            : this.$router.push("/panel/novedades");
        } else {
          this.$swal.fire(new SwitAletOptions(resData.message, "error"));
        }
      } catch (error) {
        this.$swal.fire(
          new SwitAletOptions(
            this.$route.path ===
            "/panel/novedades/" + this.$route.params.id + "/modificar"
              ? "Error de servicio de novedades."
              : "Error de servicio de paginas",
            "error"
          )
        );
      }
    },

    onFileSelectedPlan(event) {
      this.planFileName = event.target.files[0].name;
      this.contentData.studyPlanFile = event.target.files[0];
    },

    onFileSelectedIcon(event) {
      this.iconFileName = event.target.files[0].name;
      this.contentData.logotype = event.target.files[0];
    }
  }
};
</script>