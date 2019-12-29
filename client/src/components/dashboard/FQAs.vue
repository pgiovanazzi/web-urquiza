<template>
  <div class="container">
    <h4 class="mt-4 mb-4">Preguntas Frecuentes</h4>
    <div class="row">
      <div class="col-md-6 border">
        <form class="m-3">
          <!-- Grid row -->
          <div class="form-row">
            <!-- Grid column -->
            <div class="col-md-12">
              <!-- Material input -->
              <div class="md-form form-group">
                <input type="text" class="form-control" id="question" />
                <label for="question">Pregunta</label>
              </div>
            </div>
          </div>
          <!-- Grid row -->
          <!-- Grid row -->
          <div class="form-row">
            <!-- Grid column -->
            <div class="col-md-12">
              <!--Material textarea-->
              <div class="md-form">
                <textarea
                  id="answer"
                  class="md-textarea form-control form-group"
                  rows="7"
                ></textarea>
                <label for="answer">Respuesta</label>
              </div>
            </div>
          </div>
          <!-- Grid row -->
          <div class="form-row">
            <button
              type="submit"
              class="btn btn-outline-info waves-effect btn-block"
            >
              <i class="fas fa-plus"></i> Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FQAs"
};
</script>

<style lang="scss" scoped></style>
