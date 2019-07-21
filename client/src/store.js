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
    careers: [],
    posts: [{
      _id: '',
      title: '',
      content: '',
      date: '',
      published: '',
      metaLabel: '',
      metaDescription: ''
    }]
  },
  mutations: {
    updateCareers(state, careersFromAction) {
      state.careers = careersFromAction
    },
    updatePosts(state, postsFromAction) {
      state.posts = postsFromAction
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
      commit('updateCareers', careersData)
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
      commit('updatePosts', postsData)
    }
  }
})