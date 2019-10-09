<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h3 class="m-3">Ultimos 30 Aspirantes</h3>
        <table class="table table-hover">
          <thead class="black white-text">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Tipo de Documento</th>
              <th scope="col">Numero de Documento</th>
              <th scope="col">Fecha de nacimiento</th>
              <th scope="col">Genero</th>
              <th scope="col">Telefono</th>
              <th scope="col">Email</th>
              <th scope="col">Carrera</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="({name, doc_type, dni, birth, gender, phone_number, email, career}, idx) of $store.getters.getAspirants"
              :key="idx"
            >
              <th scope="row">{{ idx + 1}}</th>
              <td>{{ name }}</td>
              <td>{{ doc_type }}</td>
              <td>{{ dni }}</td>
              <td>{{ birth | formatDate2 }}</td>
              <td>{{ gender }}</td>
              <td>{{ phone_number }}</td>
              <td>{{ email }}</td>
              <td>{{ career }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
const Breadcrumb = () => import("@/components/dashboard/Breadcrumb.vue");

export default {
  name: "EntrantsInDashboard",
  components: {
    Breadcrumb
  }
};
</script>