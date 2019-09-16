<template>
  <div>
    <div class="row" v-if="getCareersInState.length">
      <div
        class="col-sm-12 col-md-4 d-flex align-items-stretch"
        v-for="(career, idx) of getCareersInState"
        :key="idx"
      >
        <Card :careerObj="career" :idx='idx' />
      </div>
    </div>
    <hr class="mt-3 mb-4" />
    <div class="row">
      <div class="col-lg-8 col-md-12 mt-4 mb-5">
        <router-view></router-view>
        <UltimaNovedad v-if="getPostsInState.length" v-show="$route.path == '/' ? true : false" />
      </div>
      <div class="col-lg-4 col-md-12 mt-4 mb-5">
        <h4 class="mb-n3">Ultimas Novedades</h4>
        <ul style="list-style-type: none;
        display: inline;" v-if="getPostsInState.length">
          <li v-for="(post,idx) of getReversePosts" :key="idx">
            <div v-if="post.published === 'true'">
              <NovedadesLista :post="post" />
            </div>
          </li>
        </ul>
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
    ...mapGetters(["getPostsInState", "getCareersInState", "getReversePosts"])
  },

  methods: {
    ...mapActions(["getCareers", "getPosts"])
  }
};
</script>