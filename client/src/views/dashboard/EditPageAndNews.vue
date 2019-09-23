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

export default {
  name: "EditPageAndNews",
  created() {
    this.$store.dispatch('getPosts')
  },
  mounted() {
    this.focusInput();
    this.contentData = this.$store.getters.getPostByAlias(
      this.$route.params.id
    );
  },
  data() {
    return {
      contentData: {}
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
        const data = await PostsService.edit(
          this.contentData,
          this.contentData._id
        );
        const resData = await data.json();

        if (resData.success) {
          this.$store.dispatch("getPosts");
          
          toastr.success(resData.message, {
            preventDuplicates: true,
            positionClass: "toast-bottom-full-width",
            timeOut: "10000"
          });

          this.$router.push("/panel/novedades");
        } else {
          toastr.error(resData.message, {
            preventDuplicates: true,
            positionClass: "toast-bottom-full-width",
            timeOut: "10000"
          });
        }
      } catch (error) {
        toastr.error("Error de servicio de novedades.", {
          preventDuplicates: true,
          positionClass: "toast-bottom-full-width",
          timeOut: "10000"
        });
      }
    }
  }
};
</script>