import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const ADD_NEW_LAYER = 'addNewLayer'

export default new Vuex.Store({
  state: {
    layers: [],
    encodersNb: 6,
  },
  actions: {
    generateNewLayer({commit, state}) {
      commit(ADD_NEW_LAYER, {
        name: 'Layer ' + state.layers.length,
        slug: 'LYR' + state.layers.length,
      })
    }
  },
  mutations: {
    [ADD_NEW_LAYER] (state, newLayer) {
      state.layers.push(newLayer)
    }
  },
  modules: {
  }
})
