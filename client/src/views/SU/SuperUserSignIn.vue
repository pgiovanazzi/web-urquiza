<template>
  <div class="row">
    <div class="col-md-6">
      <section class="mb-5">
        <div class="card text-center z-depth-2 p-4">
          <div class="card-body white-text">
            <h4 class="text-center w-responsive mx-auto mb-3">Administración del Sitio</h4>

            <div class="row">
              <!--Grid column-->
              <div class="col-md-12 mb-md-0 mb-5">
                <form @submit.prevent>
                  <!--Grid column-->
                  <div class="row">
                    <div class="col-md-12">
                      <div class="md-form mb-0">
                        <input type="email" class="form-control text-white" required />
                        <label class>Nombre de usuario</label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="md-form mb-0">
                        <input type="password" class="form-control text-white" required />
                        <label class>Contraseña</label>
                      </div>
                    </div>
                  </div>

                  <div class="text-center mt-4">
                    <button v-if="!sending" class="btn btn-outline-light btn-block waves-effect">
                      <span>
                        Ingresar
                        <i class="fas fa-sign-in-alt"></i>
                      </span>
                    </button>
                    <button v-if="sending" class="btn btn-outline-light waves-effect" disabled>
                      <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                      Enviando...
                    </button>
                  </div>

                  <div class="row m-3">
                    <div class="col-md-12">
                      <p>
                        ¿Necesita ayuda? click
                        <a
                          class="btn btn-flat white-text p-1 my-1 mr-0 mml-1"
                          data-toggle="modal"
                          data-target="#basicExampleModal"
                        >
                          <strong>aquí</strong>
                        </a>
                      </p>
                    </div>
                  </div>

                  <!-- Modal -->
                  <div
                    class="modal fade black-text"
                    id="basicExampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-lg" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Ayuda</h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <!-- Accordion -->
                          <div class="accordion" id="AcordionAyuda">
                            <div class="card z-depth-0 bordered">
                              <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                  <button
                                    class="btn btn-link"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                  >Recuperar contraseña</button>
                                </h5>
                              </div>
                              <div
                                id="collapseOne"
                                class="collapse show"
                                aria-labelledby="headingOne"
                                data-parent="#AcordionAyuda"
                              >
                                <div class="card-body">
                                  Para recuperar la contraseña ingrese su email y precionar el boton "Recuperar contraseña". Luego recibirá un enlace a su correo para recuperar la contraseña.
                                  <div class="row">
                                    <div class="col-md-12">
                                      <div class="md-form mb-0">
                                        <div class="input-group mb-3">
                                          <input
                                            type="email"
                                            class="form-control text-black"
                                          />
                                          <label>Nombre de usuario</label>
                                          <div class="input-group-append">
                                            <button class="btn btn-outline-grey">Recuperar contraseña</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="card z-depth-0 bordered">
                              <div class="card-header" id="headingTwo">
                                <h5 class="mb-0">
                                  <button
                                    class="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                  >Cambiar nombre de usuario</button>
                                </h5>
                              </div>
                              <div
                                id="collapseTwo"
                                class="collapse"
                                aria-labelledby="headingTwo"
                                data-parent="#AcordionAyuda"
                              >
                                <div class="card-body">
                                  Para cambiar el nombre de usuario debe ingresar el email y precionar el boton "Cambiar nombre de usuario", luego le llegará un enlace a su correo para realizar el cambio de nombre de usuario.
                                  <div class="row">
                                    <div class="col-md-12">
                                      <div class="md-form mb-0">
                                        <div class="input-group mb-3">
                                          <input
                                            type="email"
                                            class="form-control text-black"
                                          />
                                          <label>Nombre de usuario</label>
                                          <div class="input-group-append">
                                            <button class="btn btn-outline-grey">Cambiar nombre de usuario</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-outline-grey" data-dismiss="modal">
                            Cerrar
                            <i class="fas fa-times-circle"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <!--Grid column-->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuperUserSignIn",
  created() {
    this.$store.commit("SET_LAYOUT", "SimpleLayout");
    this.$store.commit("SET_LAYOUT_SU", "SuperUserSignIn");
  },
  data() {
    return {
      sending: false
    };
  }
};
</script>


<style scoped>
.modal .card {
  background: whitesmoke;
}
.card {
  background: rgba(1, 1, 1, 0.7);
}

label {
  color: aliceblue;
}

input[type="password"]:focus:not([readonly]),
input[type="email"]:focus:not([readonly]) {
  border-bottom: 1px solid #6096cc;
  box-shadow: 0 1px 0 0 #6096cc;
}

input[type="password"]:focus:not([readonly]) + label,
input[type="email"]:focus:not([readonly]) + label {
  color: #6096cc;
}

label.active {
  color: #6096cc;
}

.modal label {
  color: black;
}

.modal input[type="password"]:focus:not([readonly]),
.modal input[type="email"]:focus:not([readonly]) {
  border-bottom: 1px solid black;
  box-shadow: 0 1px 0 0 black;
}

.modal input[type="password"]:focus:not([readonly]) + label,
.modal input[type="email"]:focus:not([readonly]) + label {
  color: black;
}

.modal label.active {
  color: black;
}
</style>