<template>
  <div>
    <!--Section: Contact-->
    <section class="m-md-2" v-if="dataInstitute">
      <!-- Heading -->
      <h2 class="mb-4 font-weight-bold text-center p-2">Contactanos</h2>
      <p class="text-center">
        ¿Tiene alguna pregunta? No dude en ponerse en contacto con nosotros
        directamente. Nuestro equipo se pondrá en contacto con usted en cuestión
        de horas para ayudarle.
      </p>

      <div class="row mt-5">
        <div class="col-lg-8 col-md-12 border">
          <div class="container">
            <div class="row">
              <div class="col-md-12 d-flex justify-content-center">
                <object class="s1" :data="setBG" type="image/svg+xml"></object>
              </div>
            </div>
          </div>
          <!-- Form contact -->
          <form class="p-4 grey-text" @submit.prevent="sendMsg">
            <div class="md-form form-sm">
              <i class="fa fa-user prefix"></i>
              <input
                type="text"
                id="form3"
                v-model="newQuery.name"
                class="form-control form-control-sm"
                required
              />
              <label for="form3">Nombre</label>
            </div>
            <div class="md-form form-sm">
              <i class="fa fa-envelope prefix"></i>
              <input
                type="text"
                id="form2"
                v-model="newQuery.email"
                class="form-control form-control-sm"
                required
              />
              <label for="form2">Email</label>
            </div>
            <div class="md-form form-sm">
              <i class="fa fa-tag prefix"></i>
              <input
                type="text"
                id="form32"
                v-model="newQuery.subject"
                class="form-control form-control-sm"
                required
              />
              <label for="form32">Asunto</label>
            </div>
            <div class="md-form form-sm">
              <i class="fa fa-pencil-alt prefix"></i>
              <textarea
                type="text"
                id="form8"
                v-model="newQuery.message"
                class="md-textarea form-control form-control-sm"
                rows="4"
                required
              ></textarea>
              <label for="form8">Mensaje</label>
            </div>
            <div class="text-center mt-4">
              <button
                v-if="!sending"
                class="btn btn-outline-blue-grey waves-effect"
              >
                <span> <i class="fas fa-paper-plane"></i> Enviar </span>
              </button>
              <button
                v-if="sending"
                class="btn btn-outline-blue-grey waves-effect"
                disabled
              >
                <span
                  class="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Enviando...
              </button>
            </div>
          </form>
          <!-- Form contact -->
        </div>

        <div class="col-lg-4 col-md-12 border color-contact-info">
          <div class="row p-5 text-center text-light">
            <div class="col-md-12">
              <ul class="list-unstyled mb-0">
                <li>
                  <i class="fas fa-map-marker-alt fa-2x mb-2"></i>
                  <p>
                    {{ dataInstitute.contact.site.address }}
                    <br />
                    {{ dataInstitute.contact.site.floor }}
                  </p>
                </li>

                <li>
                  <i class="fas fa-phone mt-4 fa-2x mb-2"></i>
                  <p>
                    {{ dataInstitute.contact.phone.phone1 }}
                    <br />
                    {{ dataInstitute.contact.phone.phone2 }}
                  </p>
                </li>

                <li>
                  <i class="fas fa-envelope mt-4 fa-2x mb-2"></i>
                  <p>{{ dataInstitute.contact.email }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Section: Contact-->
  </div>
</template>

<script>
import ContactService from "../ContactService";

class Query {
  constructor(name, email, subject, message) {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.message = message;
  }
}

class ToastOptions {
  constructor(type, title) {
    this.type = type;
    this.title = title;
  }
}

export default {
  name: "Contact",

  data() {
    return {
      setBG: require("@/assets/undraw_contact_us.svg"),
      newQuery: new Query(),
      sending: false,
      dataInstitute: null,
      toast: this.$swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 8000
      })
    };
  },

  async mounted() {
    await this.$store.dispatch("getInstituteInfo");
    this.dataInstitute = this.$store.getters.getInstituteInfo[0];
  },

  methods: {
    async sendMsg() {
      try {
        this.sending = true;
        const data = await ContactService.send(this.newQuery);
        const resMsg = await data.json();

        if (resMsg.status)
          this.toast.fire(new ToastOptions("success", resMsg.message));
        else this.toast.fire(new ToastOptions("error", resMsg.message));

        this.newQuery = new Query();
      } catch (error) {
        this.toast.fire(
          new ToastOptions("error", "Ha ocurrido un error inesperado...")
        );
      } finally {
        this.sending = false;
      }
    }
  }
};
</script>

<style scoped>
img {
  width: 12rem;
}

.s1 {
  position: absolute;
  z-index: -1;
  margin-top: -212px !important;
  height: 100vh;
  width: 100%;
  opacity: 0.12369;
}
.color-contact-info {
  z-index: -2;
  background-color: rgb(16, 45, 70);
}
input[type="text"]:focus:not([readonly]),
textarea.md-textarea:focus:not([readonly]) {
  border-bottom: 1px solid #6096cc;
  box-shadow: 0 1px 0 0 #6096cc;
}
input[type="text"]:focus:not([readonly]) + label,
textarea.md-textarea:focus:not([readonly]) + label {
  color: #6096cc;
}
label.active {
  color: #6096cc;
}
.prefix.active {
  color: #6096cc;
}
</style>
