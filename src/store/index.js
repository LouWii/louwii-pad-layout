import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const ADD_NEW_LAYER = 'addNewLayer'
const ADD_ENCODERS = 'addEncoders'
const SELECT_LAYER = 'selectLayer'

export default new Vuex.Store({
  state: {
    layers: [],
    encoders: [],
    encodersNb: 6,
    selectedLayerIndex: null,
  },
  getters: {
    selectedEncoders: state => state.encoders[state.selectedLayerIndex]
  },
  actions: {
    generateNewLayer({commit, state}) {
      const newEncoders = []
      let i = 0
      while (i < state.encodersNb) {
        newEncoders.push({
          index: i,
          type: null,
        })
        i++
      }
      commit(ADD_ENCODERS, newEncoders)
      commit(ADD_NEW_LAYER, {
        name: 'Layer ' + state.layers.length,
        slug: 'LYR' + state.layers.length,
      })
    },
    selectDefaultLayer({commit}) {
      commit(SELECT_LAYER, 0)
    },
  },
  mutations: {
    [ADD_NEW_LAYER] (state, newLayer) {
      state.layers.push(newLayer)
    },
    [ADD_ENCODERS] (state, encoders) {
      state.encoders.push(encoders)
    },
    [SELECT_LAYER] (state, layerIndex) {
      state.selectedLayerIndex = layerIndex
    },
  },
  modules: {
  }
})
