<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-8 pl-3 pt-2">
            <h3>Novedades</h3>
          </div>
          <CreateContent />
          <div class="col-md-4">
            <button
              type="button"
              class="btn btn-outline-success btn-rounded waves-effect"
              data-toggle="modal"
              data-target="#createContent"
            >
              <i class="fas fa-plus"></i> Crear nueva novedad
            </button>
          </div>
        </div>
        <!--Table-->
        <table class="table table-hover">
          <!--Table head-->
          <thead>
            <tr>
              <th>#</th>
              <th>Titulo</th>
              <th>Publicado</th>
              <th>Fecha de publicación</th>
              <th>Ver</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <!--Table head-->
          <!--Table body-->
          <tbody>
            <tr v-for="(post, idx) in getReversePosts" :key="idx">
              <th scope="row">{{ idx + 1 }}</th>
              <td>
                <strong>{{ post.description }}</strong>
              </td>
              <td v-html="setIconPublished(post.published)"></td>
              <td>{{ post.date | formatDate2 }}</td>
              <td>
                <router-link :to="'/panel/novedades/' + post.alias">
                  <strong>
                    <i class="far fa-eye"></i>
                  </strong>
                </router-link>
              </td>
              <td>
                <router-link :to="'/panel/novedades/' + post.alias + '/modificar'">
                  <strong>
                    <i class="far fa-edit"></i>
                  </strong>
                </router-link>
              </td>
              <td>
                <a @click="removePost(post._id)">
                  <strong>
                    <i class="fas fa-trash-alt"></i>
                  </strong>
                </a>
              </td>
            </tr>
          </tbody>
          <!--Table body-->
        </table>
        <!--Table-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostsService from "@/services/PostsService.js";
const CreateContent = () => import("@/components/dashboard/CreateContent.vue");

export default {
  name: "NewsInDashboard",
  components: {
    CreateContent
  },
  created() {
    this.getPosts();
  },
  computed: {
    ...mapGetters(["getReversePosts"])
  },
  methods: {
    ...mapActions(["getPosts"]),

    setIconPublished(pub) {
      return pub
        ? "<i class='fas fa-check'></i>"
        : "<i class='fas fa-minus'></i>";
    },

    async removePost(id) {
      try {
        const data = await PostsService.remove(id);
        const resData = await data.json();

        if (resData.success) {
          this.getPosts();
          this.$toasted.success(resData.message, {
            icon: "check"
          });
        } else {
          this.$toasted.error(resData.message, {
            icon: "times"
          });
        }
      } catch (error) {
        this.$toasted.error("Error de servicio de novedades.", {
          icon: "times"
        });
      }
    }
  }
};
</script>

<style scoped>
a {
  color: rgb(31, 64, 92) !important;
}
a:hover {
  color: #6096cc !important;
}

.fa-eye,
.fa-edit,
.fa-trash-alt {
  font-size: 1.3rem;
}
</style>