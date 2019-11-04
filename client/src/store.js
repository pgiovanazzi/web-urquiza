import Vue from "vue";
import Vuex from "vuex";

import {
  CareersService,
  PostsService,
  PagesService,
  AspirantsService
} from "@/services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editorContent: null,
    layout: "Main",
    setComponentInSimpleLayout: "Preinscribirse",
    careers: [],
    posts: [],
    pages: [],
    aspirants: []
  },
  getters: {
    getEditorContent: ({ editorContent }) => editorContent,

    getCareersInState: ({ careers }) => careers,

    getCareerByAlias: ({ careers }) => alias => {
      return careers.find(career => career.alias === alias);
    },

    getPostsInState: ({ posts }) => posts,

    getPostsSortedByDate: ({ posts }) => {
      return posts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    },

    getPostByAlias: ({ posts }) => alias => {
      return posts.find(post => post.alias === alias);
    },

    getPostPublishedAndSortedByDate: ({ posts }) => {
      return posts
        .filter(post => post.published)
        .sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
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
    SET_EDITOR_CONTENT(state, contentIn) {
      state.editorContent = contentIn;
    },

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
      const careersData = await CareersService.get();
      commit("UPDATE_CAREERS", {
        careersFromAction: await careersData.json()
      });
    },

    async getPosts({ commit }) {
      const postsData = await PostsService.get();
      commit("UPDATE_POSTS", {
        postsFromAction: await postsData.json()
      });
    },

    async getPages({ commit }) {
      const pagesData = await PagesService.get();
      commit("UPDATE_PAGES", {
        pagesFromAction: await pagesData.json()
      });
    },

    async getAspirants({ commit }) {
      const aspirantsData = await AspirantsService.get();
      commit("UPDATE_ASPIRANTS", {
        aspirantsFromActions: await aspirantsData.json()
      });
    }
  }
});
