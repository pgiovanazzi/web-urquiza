<template>
  <div>
    <div class="row">
      <div
        class="col-sm-12 col-md-4 d-flex align-items-stretch"
        v-for="(career, idx) of careers"
        :key="idx"
      >
        <Card
          :careerName="career.name"
          :careerDesc="career.description"
          :careerImage="getImgUrl(career.imageName)"
          :careerRoute="career.route"
        />
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-lg-8 col-md-12">
        <router-view></router-view>
        <UltimaNovedad
          v-show="$route.path == '/' ? true : false"
          :lastPost="getLastPost(posts)"
        />
      </div>
      <div class="col-lg-4 col-md-12">
        <h4>Ultimas Novedades</h4>
        <ul>
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

  data() {
    return {};
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
    getImgUrl(imgIn) {
      return require(`@/assets/${imgIn}`);
    },
    reverseArr(arr) {
      return arr.slice().reverse();
    },
    getLastPost(postsIn) {
      return postsIn[postsIn.length - 1];
    }
  }
};
</script>


