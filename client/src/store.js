import Vue from 'vue'
import Vuex from 'vuex'
import {
  Collection
} from 'mongoose';

const url = "/su/panel/carreras"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    careers: []
  },
  mutations: {
    updateCareers(state, careersFromAction) {
      state.careers = careersFromAction
    }
  },
  actions: {
    async getCareers({
      commit
    }) {
      const data = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'GET'
      })
      const careersData = await data.json()
      commit('updateCareers', careersData)
    }
  }
})