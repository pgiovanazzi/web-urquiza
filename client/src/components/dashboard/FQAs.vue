<template>
  <div class="container">
    <h4 class="mt-4 mb-4">Preguntas Frecuentes</h4>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <form class="m-3">
              <!-- Grid row -->
              <div class="form-row">
                <!-- Grid column -->
                <div class="col-md-12">
                  <label for="question">Pregunta</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="dataFQA.question"
                    id="question"
                  />
                </div>
              </div>
              <!-- Grid row -->
              <!-- Grid row -->
              <div class="form-row">
                <!-- Grid column -->
                <div class="col-md-12">
                  <label for="answer">Respuesta</label>
                  <textarea
                    id="answer"
                    class="md-textarea form-control form-group"
                    v-model="dataFQA.answer"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <!-- Grid row -->
              <div class="form-row">
                <template v-if="isEdit === false">
                  <button
                    type="submit"
                    class="btn btn-outline-primary waves-effect btn-block"
                    @click.prevent="addFQA(dataFQA)"
                  >
                    <i class="fas fa-plus"></i> Agregar
                  </button>
                </template>
                <template v-else>
                  <button
                    type="submit"
                    class="btn btn-outline-info waves-effect btn-block"
                    @click.prevent="updateFQA(dataFQA._id, dataFQA)"
                  >
                    <i class="fas fa-pen"></i> Modificar
                  </button>
                  <button
                    type="submit"
                    class="btn btn-outline-danger waves-effect btn-block mt-3"
                    @click.prevent="cancelUpdate()"
                  >
                    <i class="fas fa-ban"></i> Cancelar
                  </button>
                </template>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-12">
        <div class="table-responsive">
          <!--Table-->
          <table
            id="tablePreview"
            class="table table-hover table-sm table-bordered"
          >
            <!--Table head-->
            <thead>
              <tr>
                <th>#</th>
                <th>Pregunta</th>
                <th>Respuesta</th>
                <th>Fecha de creación</th>
                <th>Fecha de modificación</th>
                <th>Modificar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <!--Table head-->
            <!--Table body-->
            <tbody>
              <tr
                v-for="({ _id, question, answer, createdAt, updatedAt },
                idx) of setDataFQA"
                :key="idx"
              >
                <th scope="row">{{ idx + 1 }}</th>
                <td>{{ question }}</td>
                <td>{{ answer }}</td>
                <td>{{ createdAt | formatDate2 }}</td>
                <td>{{ updatedAt | formatDate2 }}</td>
                <td>
                  <a @click="editFQA(_id)"><i class="fas fa-edit"></i></a>
                </td>
                <td>
                  <a @click="deleteFQA(_id)"> <i class="fas fa-trash"></i></a>
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
</template>

<script>
import { FQAsService } from "@/services";
import { mapActions } from "vuex";

class FQA {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

class ToastOptions {
  constructor(type, title) {
    this.type = type;
    this.title = title;
  }
}

export default {
  name: "FQAs",

  data() {
    return {
      dataFQA: new FQA(),
      setDataFQA: null,
      isEdit: false,
      toast: this.$swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 8000
      })
    };
  },

  async mounted() {
    await this.getFQAs();
    this.setDataFQA = this.$store.getters.getFQAs;
  },

  methods: {
    ...mapActions(["getFQAs"]),

    async editFQA(id) {
      this.dataFQA = await this.$store.getters.getFQAById(id);
      this.isEdit = true;
    },

    async cancelUpdate() {
      this.isEdit = false;
      this.dataFQA = new FQA();
      await this.getFQAs();
      this.setDataFQA = this.$store.getters.getFQAs;
    },

    async addFQA(body) {
      try {
        const data = await FQAsService.add(body);
        const resData = await data.json();

        if (resData.success) {
          await this.getFQAs();
          this.setDataFQA = this.$store.getters.getFQAs;
          this.dataFQA = new FQA();

          this.toast.fire(new ToastOptions("success", resData.message));
        } else {
          this.toast.fire(new ToastOptions("error", resData.message));
        }
      } catch (error) {
        this.toast.fire(
          new ToastOptions("error", "Error de servicio al agregar FQA.")
        );
      }
    },

    async updateFQA(id, body) {
      try {
        const data = await FQAsService.partialUpdate(id, body);
        const resData = await data.json();

        if (resData.success) {
          await this.getFQAs();
          this.setDataFQA = this.$store.getters.getFQAs;
          this.dataFQA = new FQA();
          this.isEdit = false;

          this.toast.fire(new ToastOptions("success", resData.message));
        } else {
          this.toast.fire(new ToastOptions("error", resData.message));
        }
      } catch (error) {
        new ToastOptions("error", "Error de servicio al modificar FQA.");
      }
    },

    async deleteFQA(id) {
      try {
        const data = await FQAsService.destroy(id);
        const resData = await data.json();

        if (resData.success) {
          await this.getFQAs();
          this.setDataFQA = this.$store.getters.getFQAs;

          this.toast.fire(new ToastOptions("success", resData.message));
        } else {
          this.toast.fire(new ToastOptions("error", resData.message));
        }
      } catch (error) {
        this.toast.fire(
          new ToastOptions("error", "Error de servicio al eliminar FQA.")
        );
      }
    }
  }
};
</script>

<style lang="css" scoped>
.table td {
  text-align: center;
}
a {
  color: rgb(31, 64, 92) !important;
}
a:hover {
  color: #6096cc !important;
}

.fa-edit,
.fa-trash {
  font-size: 1.3rem;
}
</style>
