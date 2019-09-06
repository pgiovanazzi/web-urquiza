<template>
  <div>
    <div class="row" v-if="careers.length">
      <div
        class="col-sm-12 col-md-4 d-flex align-items-stretch"
        v-for="career of careers"
        :key="career._id"
      >
        <Card :careerObj="career" />
      </div>
    </div>
    <hr class="mt-3 mb-4" />
    <div class="row">
      <div class="col-lg-8 col-md-12 mt-4 mb-5">
        <router-view></router-view>
        <UltimaNovedad
          v-if="posts.length"
          v-show="$route.path == '/' ? true : false"
          :lastPost="getLastPost(posts)"
        />
      </div>
      <div class="col-lg-4 col-md-12 mt-4 mb-5">
        <h4 class="mb-n3">Ultimas Novedades</h4>
        <ul style="list-style-type: none;
        display: inline;" v-if="posts.length">
          <li v-for="post of reverseArr(posts)" :key="post._id">
            <NovedadesLista :post="post" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>require

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import NovedadesLista from "@/components/NovedadesLista.vue";
import UltimaNovedad from "@/components/UltimaNovedad.vue";
import { mapState, mapActions } from "vuex";

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
    ...mapState(["careers", "posts"])
  },

  methods: {
    ...mapActions(["getCareers", "getPosts"]),
    reverseArr(arr) {
      return arr.slice().reverse();
    },
    getLastPost(postsIn) {
      return postsIn[postsIn.length - 1];
    }
  }
};
</script>


