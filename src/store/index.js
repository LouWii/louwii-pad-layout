import Vue from 'vue'
import Vuex from 'vuex'

import layerEditModal from './modules/layerEditModal'

Vue.use(Vuex)

const ADD_NEW_LAYER = 'addNewLayer'
const ADD_ENCODERS = 'addEncoders'
const SELECT_LAYER = 'selectLayer'
const SHOW_LAYER_EDIT_MODAL = 'showLayerEditModal'
const UPDATE_ENCODER_ACTION = 'updateEncoderAction'
const UPDATE_ENCODER_ACTION_TYPE = 'updateEncoderActionType'

export default new Vuex.Store({
  state: {
    layers: [],
    encoders: [],
    encodersNb: 6,
    selectedLayerIndex: null,
  },
  getters: {
    getLayer: state => layerIndex => state.layers.find(lay => lay.index === layerIndex),
    selectedEncoders: state => state.encoders.filter(enc => {
        return enc.layerIndex === (state.selectedLayerIndex !== null ? state.selectedLayerIndex : 0)
      }).sort((enc1, enc2) => {
        return enc1.index > enc2.index
      }),
    selectedLayer: state => state.layers.find(lay => lay.index === state.selectedLayerIndex),
    nextLayerIndex: state => {
      let maxIndex = 0
      state.layers.forEach(lay => { if (lay.index > maxIndex) maxIndex = lay.index})
      return maxIndex + 1
    },
  },
  actions: {
    generateNewLayer({commit, getters, state}) {
      const newEncoders = []
      let i = 0
      let encoderLayer = getters.nextLayerIndex
      let encoderIndexOffset = state.encoders.length
      while (i < state.encodersNb) {
        newEncoders.push({
          index: i + encoderIndexOffset,
          layerIndex: encoderLayer,
          type: null,
          clockwiseActionType: null,
          clockwiseAction: null,
          counterclockwiseActionType: null,
          counterclockwiseAction: null,
        })
        i++
      }
      commit(ADD_ENCODERS, newEncoders)
      commit(ADD_NEW_LAYER, {
        name: 'Layer ' + getters.nextLayerIndex,
        slug: 'LYR' + getters.nextLayerIndex,
        index: getters.nextLayerIndex
      })
    },
    selectDefaultLayer({commit, state}) {
      // select first layer of the array of layers
      commit(SELECT_LAYER, state.layers.find(lay => lay !== undefined).index)
    },
    selectLayer({commit}, layerIndex) {
      commit(SELECT_LAYER, layerIndex)
    },
    showEditLayerModal({commit}, layerIndex) {
      commit(SHOW_LAYER_EDIT_MODAL, layerIndex)
    },
    updateEncoderAction({commit}, {index, rotation, action}) {
      commit(UPDATE_ENCODER_ACTION, {index, rotation, action})
    },
    updateEncoderActionType({commit}, {index, rotation, actionType}) {
      commit(UPDATE_ENCODER_ACTION_TYPE, {index, rotation, actionType})
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
    [UPDATE_ENCODER_ACTION] (state, {index, rotation, action}) {
        let curEncoder = state.encoders[index]
        if (rotation === 'clockwise') {
          curEncoder.clockwiseAction = action
        } else {
          curEncoder.counterclockwiseAction = action
        }
        Vue.set(state.encoders, index, curEncoder)
    },
    [UPDATE_ENCODER_ACTION_TYPE] (state, {index, rotation, actionType}) {
      let curEncoder = state.encoders[index]
      if (rotation === 'clockwise') {
        curEncoder.clockwiseActionType = actionType
        curEncoder.clockwiseAction = null //reset the action data (if the user messed up, too bad!)
      } else {
        curEncoder.counterclockwiseActionType = actionType
        curEncoder.counterclockwiseAction = null //reset the action data (if the user messed up, too bad!)
      }
      Vue.set(state.encoders, index, curEncoder)
    }
  },
  modules: {
    layerEditModal
  }
})
