import Vue from "vue";
import Vuex from "vuex";
import { Collection } from "mongoose";

const apiCareers = "/su/panel/carreras";
const apiPosts = "/su/panel/publicaciones";
const apiPages = "/su/panel/paginas";
const apiAspirants = "/su/panel/registros/aspirantes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout: "Main",
    setComponentInSimpleLayout: "Preinscribirse",
    careers: [],
    posts: [],
    pages: [],
    aspirants: []
  },
  getters: {
    getCareersInState: ({ careers }) => careers,

    getCareerByAlias: ({ careers }) => alias => {
      return careers.find(career => career.alias === alias);
    },

    getPostsInState: ({ posts }) => posts,

    getReversePosts: ({ posts }) => posts.reverse(),

    getPostByAlias: ({ posts }) => alias => {
      return posts.find(post => post.alias === alias);
    },

    getLastPost: ({ posts }) => {
      let lastPostPublished = {};
      for (let index = posts.length - 1; index > -1; index--) {
        if (posts[index].published) {
          lastPostPublished = posts[index];
          break;
        }
      }
      return lastPostPublished;
    },

    getPageByAlias: ({ pages }) => alias => {
      return pages.find(page => page.alias === alias);
    },

    getPagesInstitutional: ({ pages }) => section =>
      pages.filter(page => page.section === section),

    getPagesEntrant: ({ pages }) => section => {
      return pages.filter(page => page.section === section);
    },

    getAspirants: ({ aspirants }) => aspirants
  },
  mutations: {
    SET_CURRENT_SELECTED_NEWS(state, newSelect) {
      state.currentSelectedNews = newSelect;
    },
    SET_LAYOUT(state, newLayout) {
      state.layout = newLayout;
    },
    SET_LAYOUT_SU(state, newLayout) {
      state.setComponentInSimpleLayout = newLayout;
    },
    UPDATE_CAREERS(state, { careersFromAction }) {
      state.careers = careersFromAction;
    },
    UPDATE_POSTS(state, { postsFromAction }) {
      state.posts = postsFromAction;
    },
    UPDATE_PAGES(state, { pagesFromAction }) {
      state.pages = pagesFromAction;
    },
    UPDATE_ASPIRANTS(state, { aspirantsFromActions }) {
      state.aspirants = aspirantsFromActions;
    },
    SUCCESS_PRE_INS(state, preinscriptionSuccessComponent) {
      state.setComponentInSimpleLayout = preinscriptionSuccessComponent;
    }
  },
  actions: {
    async getCareers({ commit }) {
      const careersData = await fetch(apiCareers, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "GET"
      });
      commit("UPDATE_CAREERS", {
        careersFromAction: await careersData.json()
      });
    },

    async getPosts({ commit }) {
      const postsData = await fetch(apiPosts, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "GET"
      });
      commit("UPDATE_POSTS", {
        postsFromAction: await postsData.json()
      });
    },

    async getPages({ commit }) {
      const pagesData = await fetch(apiPages, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "GET"
      });
      commit("UPDATE_PAGES", {
        pagesFromAction: await pagesData.json()
      });
    },

    async getAspirants({ commit }) {
      const aspirantsData = await fetch(apiAspirants, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "GET"
      });
      commit("UPDATE_ASPIRANTS", {
        aspirantsFromActions: await aspirantsData.json()
      });
    }
  }
});
