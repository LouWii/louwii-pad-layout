import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const ADD_NEW_LAYER = 'addNewLayer'
const ADD_ENCODERS = 'addEncoders'
const SELECT_LAYER = 'selectLayer'
const UPDATE_ENCODER_ACTION = 'updateEncoderAction'

export default new Vuex.Store({
  state: {
    layers: [],
    encoders: [],
    encodersNb: 6,
    selectedLayerIndex: null,
  },
  getters: {
    selectedEncoders: state => state.encoders.filter(enc => {
        return enc.layerIndex === (state.selectedLayerIndex !== null ? state.selectedLayerIndex : 0)
      }).sort((enc1, enc2) => {
        return enc1.index > enc2.index
      }),
    selectedLayer: state => state.layers[state.selectedLayerIndex],
  },
  actions: {
    generateNewLayer({commit, state}) {
      const newEncoders = []
      let i = 0
      let encoderLayer = state.layers.length
      while (i < state.encodersNb) {
        newEncoders.push({
          index: i,
          layerIndex: encoderLayer,
          type: null,
          clockwiseActionType: null,
          clockwiseAction: null,
          ctrclockwiseActionType: null,
          ctrclockwiseAction: null,
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
    selectLayerFromSlug({commit, state}, layerSlug) {
      state.layers.forEach((layer, index) => {
        if (layer.slug === layerSlug) commit(SELECT_LAYER, index)
      })
    },
    /**
     * 
     * @param {*} param0 
     * @param {Object} partialEncoder {index: 0, rotation: 'clockwise', actionType: '', action: {}}
     */
    updateEncoderAction({commit}, partialEncoder) {
      commit(UPDATE_ENCODER_ACTION, partialEncoder)
    },
  },
  mutations: {
    [ADD_NEW_LAYER] (state, newLayer) {
      state.layers.push(newLayer)
    },
    [ADD_ENCODERS] (state, encoders) {
      Vue.set(state, 'encoders', state.encoders.concat(encoders))
    },
    [SELECT_LAYER] (state, layerIndex) {
      state.selectedLayerIndex = layerIndex
    },
    [UPDATE_ENCODER_ACTION] (state, partialEncoder) {
      const curEncoderIndex = state.encoders.findIndex(enc => {
        return enc.layerIndex === state.selectedLayerIndex && enc.index === partialEncoder.index
      })
      if (curEncoderIndex !== -1) {
        let curEncoder = state.encoders[curEncoderIndex]
        if (partialEncoder.rotation === 'clockwise') {
          curEncoder.clockwiseActionType = partialEncoder.actionType
          curEncoder.clockwiseAction = partialEncoder.action
        } else {
          curEncoder.clockwiseActionType = partialEncoder.actionType
          curEncoder.clockwiseAction = partialEncoder.action
        }
        Vue.set(state.encoders, curEncoderIndex, curEncoder)
      } else {
        /*eslint no-console: 0*/
        console.error(`Tried to update encoder ${partialEncoder.index} on layer ${state.selectedLayerIndex} but was not found`)
      }
    }
  },
  modules: {
  }
})
