import Vue from 'vue'
import Vuex from 'vuex'
import {
  Collection
} from 'mongoose';

const apiCareers = "/su/panel/carreras"
const apiPosts = "/su/panel/publicaciones"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'Main',
    compsForm: 'Preinscribirse',
    careers: [],
    posts: [{
      _id: '',
      title: '',
      content: '',
      date: '',
      published: '',
      metaLabel: '',
      metaDescription: ''
    }],
  },
  mutations: {
    SET_LAYOUT(state, newLayout) {
      state.layout = newLayout
    },
    UPDATE_CAREERS(state, careersFromAction) {
      state.careers = careersFromAction
    },
    UPDATE_POSTS(state, postsFromAction) {
      state.posts = postsFromAction
    },
    SUCCESS_PRE_INS(state, preinscriptionSuccessComponent) {
      state.compsForm = preinscriptionSuccessComponent
    }
  },
  actions: {
    async getCareers({
      commit
    }) {
      const data = await fetch(apiCareers, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'GET'
      })
      const careersData = await data.json()
      commit('UPDATE_CAREERS', careersData)
    },
    async getPosts({
      commit
    }) {
      const data = await fetch(apiPosts, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'GET'
      })
      const postsData = await data.json()
      commit('UPDATE_POSTS', postsData)
    }
  }
})