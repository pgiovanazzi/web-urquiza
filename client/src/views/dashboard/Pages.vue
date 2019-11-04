<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-8 pl-3 pt-2">
            <h3>Paginas</h3>
          </div>
          <CreateContent />
          <div class="col-md-4">
            <button
              type="button"
              class="btn btn-outline-success btn-rounded waves-effect"
              data-toggle="modal"
              data-target="#createContent"
            >
              <i class="fas fa-plus"></i> Crear nueva pagina
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 p-4">
            <div class="accordion" id="accordionExample">
              <div class="z-depth-0">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-outline-link waves-effect collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Sección Institucional
                      <i class="fas fa-caret-down"></i>
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="table-responsive text-nowrap">
                    <!--Table-->
                    <table id="tablePreview" class="table table-hover">
                      <!--Table head-->
                      <thead class="unique-color white-text">
                        <tr>
                          <th>#</th>
                          <th>Descripción (título)</th>
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
                        <tr
                          v-for="({description, published, date, alias, _id}, idx) in $store.getters.getPagesInstitutional('INSTITUCIONAL')"
                          :key="idx"
                        >
                          <th scope="row">{{ idx + 1 }}</th>
                          <td>
                            <strong>{{ description }}</strong>
                          </td>
                          <td v-html="setIconPublished(published)"></td>
                          <td>{{ date | formatDate2 }}</td>
                          <td>
                            <router-link :to="'/panel/paginas/' + alias">
                              <strong>
                                <i class="far fa-eye"></i>
                              </strong>
                            </router-link>
                          </td>
                          <td>
                            <router-link :to="'/panel/paginas/' + alias + '/modificar'">
                              <strong>
                                <i class="far fa-edit"></i>
                              </strong>
                            </router-link>
                          </td>
                          <td>
                            <a @click="removePage(_id)">
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
              <div class="z-depth-0">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-outline-link waves-effect collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Sección Ingresantes
                      <i class="fas fa-caret-down"></i>
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div class="table-responsive text-nowrap">
                    <!--Table-->
                    <table id="tablePreview" class="table table-hover">
                      <!--Table head-->
                      <thead class="unique-color white-text">
                        <tr>
                          <th>#</th>
                          <th>Descripción (título)</th>
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
                        <tr
                          v-for="({description, published, date, alias, _id}, idx) in $store.getters.getPagesInstitutional('INGRESANTES')"
                          :key="idx"
                        >
                          <th scope="row">{{ idx + 1 }}</th>
                          <td>
                            <strong>{{ description }}</strong>
                          </td>
                          <td v-html="setIconPublished(published)"></td>
                          <td>{{ date | formatDate2 }}</td>
                          <td>
                            <router-link :to="'/panel/paginas/' + alias">
                              <strong>
                                <i class="far fa-eye"></i>
                              </strong>
                            </router-link>
                          </td>
                          <td>
                            <router-link :to="'/panel/paginas/' + alias + '/modificar'">
                              <strong>
                                <i class="far fa-edit"></i>
                              </strong>
                            </router-link>
                          </td>
                          <td>
                            <a @click="removePage(_id)">
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
              <div class="z-depth-0">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-outline-link waves-effect collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Sección Carreras
                      <i class="fas fa-caret-down"></i>
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div class="table-responsive text-nowrap">
                    <!--Table-->
                    <table id="tablePreview" class="table table-hover">
                      <!--Table head-->
                      <thead class="unique-color white-text">
                        <tr>
                          <th>#</th>
                          <th>Descripción (título)</th>
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
                        <tr
                          v-for="({description, published, date, alias, _id}, idx) in $store.getters.getCareersInState"
                          :key="idx"
                        >
                          <th scope="row">{{ idx + 1 }}</th>
                          <td>
                            <strong>{{ description }}</strong>
                          </td>
                          <td v-html="setIconPublished(published)"></td>
                          <td>{{ date | formatDate2 }}</td>
                          <td>
                            <router-link :to="'/panel/paginas/' + alias">
                              <strong>
                                <i class="far fa-eye"></i>
                              </strong>
                            </router-link>
                          </td>
                          <td>
                            <router-link :to="'/panel/paginas/' + alias + '/modificar'">
                              <strong>
                                <i class="far fa-edit"></i>
                              </strong>
                            </router-link>
                          </td>
                          <td>
                            <a @click="removeCareer(_id)">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const CreateContent = () => import("@/components/dashboard/CreateContent.vue");
import PagesService from "@/services/PagesService.js";
import CareersService from "@/services/CareersService.js";

class ToastOptions {
  constructor(type, title) {
    this.type = type;
    this.title = title;
  }
}

export default {
  name: "Pages",
  components: {
    CreateContent
  },
  computed: {
    getLogitype() {
      return this.$store.getters.getCareersInState[0].logotype;
    }
  },
  created() {
    this.$store.dispatch("getPages");
  },
  data() {
    return {
      entrants: [],
      toast: this.$swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 8000
      })
    };
  },
  mounted() {
    this.entrants = this.$store.getters.getPagesEntrant("INGRESANTES");
  },
  methods: {
    setIconPublished(pub) {
      return pub
        ? "<i class='fas fa-check'></i>"
        : "<i class='fas fa-minus'></i>";
    },

    async removePage(id) {
      try {
        const data = await PagesService.remove(id);
        const resData = await data.json();

        if (resData.success) {
          this.$store.dispatch("getPages");

          this.toast.fire(new ToastOptions("success", resData.message));
        } else {
          this.toast.fire(new ToastOptions("error", resData.message));
        }
      } catch (error) {
        this.toast.fire(
          new ToastOptions("success", "Error de servicio de paginas.")
        );
      }
    },

    async removeCareer(id) {
      try {
        const data = await CareersService.remove(id);
        const resData = await data.json();

        if (resData.success) {
          this.$store.dispatch("getCareers");

          this.toast.fire(new ToastOptions("success", resData.message));
        } else {
          this.toast.fire(new ToastOptions("error", resData.message));
        }
      } catch (error) {
        this.toast.fire(
          new ToastOptions("error", "Error de servicio de carreras.")
        );
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