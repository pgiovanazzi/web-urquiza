<template>
  <div>
    <div class="row" v-if="getCareersInState.length">
      <div
        class="col-sm-12 col-md-4 d-flex align-items-stretch"
        v-for="(career, idx) of getPagesPublished(getCareersInState)"
        :key="idx"
      >
        <Card :careerObj="career" />
      </div>
    </div>
    <hr class="mt-3 mb-4" />

    <div class="row">
      <div class="col-lg-8 col-md-12 mt-4 mb-5">
        <router-view></router-view>
        <UltimaNovedad v-if="getPostsInState.length && showLastNews" />
      </div>
      <div class="col-lg-4 col-md-12 mt-4 mb-5">
        <div class="container">
          <h4>Ultimas Novedades</h4>
          <hr />
          <div
            class="row mb-1 mt-2"
            v-if="getPostsInState.length"
            v-for="(post, idx) of getPostPublishedAndSortedByDate"
            :key="idx"
          >
            <div class="col-md-12">
              <NovedadesLista :post="post" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import NovedadesLista from "@/components/NovedadesLista.vue";
import UltimaNovedad from "@/components/UltimaNovedad.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "inicio",

  components: {
    Card,
    NovedadesLista,
    UltimaNovedad
  },

  created() {
    this.$store.commit("SET_LAYOUT", "Main");
    this.getCareers();
    this.getPosts();
  },

  computed: {
    ...mapGetters([
      "getPostsInState",
      "getCareersInState",
      "getPostPublishedAndSortedByDate"
    ]),
    showLastNews() {
      return this.$route.path == "/" ? true : false;
    }
  },

  methods: {
    ...mapActions(["getCareers", "getPosts"]),

    getPagesPublished(pages) {
      return pages.filter(page => page.published);
    }
  }
};
</script>

<style lang="css">
.nl {
  width: 22rem;
}
</style>
