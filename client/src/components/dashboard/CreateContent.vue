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
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="sendNewContent">
            <div class="modal-body mx-3">
              <label data-error="error" data-success="correcto">Seleccione la sección</label>
              <select
                class="browser-default custom-select form-control mb-2"
                v-if="$route.path === '/panel/paginas'"
                v-model="newContent.section"
                required
              >
                <option value="INSTITUCIONAL">Institucional</option>
                <option value="INGRESANTES">Ingresantes</option>
                <option value="CARRERAS">Carreras</option>
              </select>
              <div class="md-form">
                <i class="fas fa-file-alt prefix"></i>
                <input
                  type="text"
                  v-model.trim="newContent.description"
                  class="form-control validate"
                  required
                />
                <label data-error="error" data-success="correcto">Descripción o nombre</label>
              </div>

              <wysiwyg v-model="newContent.content" />

              <div class="md-from mt-3">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    v-model="newContent.published"
                    class="custom-control-input"
                    id="defaultIndeterminate2"
                    checked
                  />
                  <label class="custom-control-label" for="defaultIndeterminate2">Publicado</label>
                </div>
              </div>
              <div class="md-form">
                <i class="fas fa-pencil-alt prefix"></i>
                <input
                  type="text"
                  v-model.trim="newContent.metaDescription"
                  class="form-control validate"
                />
                <label data-error="error" data-success="correcto">Meta descripción</label>
              </div>

              <div class="md-form">
                <i class="fas fa-tags prefix"></i>
                <input
                  type="text"
                  v-model.trim="newContent.metaLabel"
                  class="form-control validate"
                />
                <label data-error="error" data-success="correcto">Meta etiqueta</label>
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <button class="btn btn-outline-elegant waves-effect">Crear contenido</button>
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
import { mapActions } from "vuex";

class ContentCreated {
  constructor(
    description = "",
    content = "",
    published = true,
    metaDescription = "",
    metaLabel = ""
  ) {
    this.description = description;
    this.content = content;
    this.published = published;
    this.metaDescription = metaDescription;
    this.metaLabel = metaLabel;
  }
}

export default {
  name: "CreateContent",
  data() {
    return {
      newContent: {}
    };
  },
  mounted() {
    this.newContent = new ContentCreated();
  },
  methods: {
    ...mapActions(["getPosts", "getPages"]),
    async sendNewContent() {
      try {
        const data =
          this.$route.path === "/panel/novedades"
            ? await PostsService.send(this.newContent)
            : await PagesService.send(this.newContent);
        const resData = await data.json();

        if (resData.success) {
          this.getPosts();
          this.getPages();
          toastr.success(resData.message, {
            preventDuplicates: true,
            positionClass: "toast-bottom-full-width",
            timeOut: "10000"
          });
          this.newContent = new ContentCreated();
        } else {
          toastr.error(resData.message, {
            preventDuplicates: true,
            positionClass: "toast-bottom-full-width",
            timeOut: "10000"
          });
        }
      } catch (error) {
        toastr.error(
          this.$route.path === "/panel/novedades"
            ? "Error de servicio de novedades."
            : "Error de servicio de paginas",
          {
            preventDuplicates: true,
            positionClass: "toast-bottom-full-width",
            timeOut: "10000"
          }
        );
      }
    }
  }
};
</script>

<style lang="css">
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>