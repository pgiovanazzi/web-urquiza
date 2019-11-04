<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h3 class="m-3">Ultimos 30 Aspirantes</h3>
        <div class="table-responsive text-nowrap">
          <table class="table table-hover">
            <thead class="unique-color white-text">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo de Documento</th>
                <th scope="col">Numero de Documento</th>
                <th scope="col">Carrera</th>
                <th scope="col">Fecha de Preinscripción</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="({_id, name, doc_type, dni, birth, gender, phone_number, email, career, signupDate}, idx) of getAspirantsSortedByDate"
                :key="idx"
                @click="getRouteAspirant(_id)"
              >
                <th scope="row">{{ idx + 1 }}</th>
                <td>{{ name }}</td>
                <td>{{ doc_type }}</td>
                <td>{{ dni }}</td>
                <td>{{ career }}</td>
                <td>{{ signupDate | formatDate2 }}</td>
              </tr>
            </tbody>
          </table>
        </div>
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
  },
  computed: {
    getAspirantsSortedByDate() {
      return this.$store.getters.getAspirants.sort((a, b) => {
        return new Date(b.signupDate) - new Date(a.signupDate);
      });
    }
  },
  methods: {
    getRouteAspirant(id) {
      return this.$router.push(`/panel/aspirante/${id}`);
    }
  }
};
</script>

<style scoped>
td {
  cursor: pointer;
}
</style>