import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 5
  },
  mutations: {
    increment (state, n) {
      state.score += n
    },
    makeZero (state) {
      state.score = 0
    }
  },
  getters: {
    score (state) {
      return state.score
    }
  },
  actions: {
  },
  modules: {
  }
})
