import Vue from 'vue'
import Vuex from 'vuex'
import {
  Collection
} from 'mongoose';

const apiCareers = "/su/panel/carreras"
const apiPosts = "/su/panel/publicaciones"
const apiPages = "/su/panel/paginas"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'Main',
    setComponentInSimpleLayout: 'Preinscribirse',
    careers: [],
    posts: [],
    pages: [],
  },
  mutations: {
    SET_LAYOUT(state, newLayout) {
      state.layout = newLayout
    },
    SET_LAYOUT_SU(state, newLayout) {
      state.setComponentInSimpleLayout = newLayout
    },
    UPDATE_CAREERS(state, {
      careersFromAction
    }) {
      state.careers = careersFromAction
    },
    UPDATE_POSTS(state, {
      postsFromAction
    }) {
      state.posts = postsFromAction
    },
    UPDATE_PAGES(state, {
      pagesFromAction
    }) {
      state.pages = pagesFromAction
    },
    SUCCESS_PRE_INS(state, preinscriptionSuccessComponent) {
      state.setComponentInSimpleLayout = preinscriptionSuccessComponent
    },
  },
  actions: {
    async getCareers({
      commit
    }) {
      const careersData = await fetch(apiCareers, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'GET'
      })
      commit('UPDATE_CAREERS', {
        careersFromAction: await careersData.json()
      })
    },
    async getPosts({
      commit
    }) {
      const postsData = await fetch(apiPosts, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'GET'
      })
      commit('UPDATE_POSTS', {
        postsFromAction: await postsData.json()
      })
    },
    async getPages({
      commit
    }) {
      const pagesData = await fetch(apiPages, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'GET'
      })
      commit('UPDATE_PAGES', {
        pagesFromAction: await pagesData.json()
      })
    }
  },

})