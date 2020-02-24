import Vue from 'vue'
import Vuex from 'vuex'

import layerEditModal from './modules/layerEditModal'

Vue.use(Vuex)

const ADD_NEW_LAYER = 'addNewLayer'
const ADD_ENCODERS = 'addEncoders'
const DELETE_LAYER = 'deleteLayer'
const DELETE_LAYER_ENCODERS = 'deleteLayerEncoders'
const SELECT_LAYER = 'selectLayer'
const SET_ENCODERS = 'setEncoder'
const SET_ENCODERS_NB = 'setEncodersNb'
const SET_LAYERS = 'setLayers'
const UPDATE_ENCODER_ACTION = 'updateEncoderAction'
const UPDATE_ENCODER_ACTION_TYPE = 'updateEncoderActionType'
const UPDATE_LAYER = 'updateLayer'

const DEFAULT_LAYER_COLOR = '#123412'

export default new Vuex.Store({
  state: {
    layers: [],
    encoders: [],
    encodersNb: 6,
    selectedLayerIndex: null,
  },
  getters: {
    getLayer: state => layerIndex => state.layers.find(lay => lay.index === layerIndex),
    jsonExport: state => JSON.stringify({layers: state.layers, encoders: state.encoders, encodersNb: state.encodersNb}),
    nextLayerIndex: state => {
      let maxIndex = 0
      state.layers.forEach(lay => { if (lay.index > maxIndex) maxIndex = lay.index})
      return maxIndex + 1
    },
    selectedEncoders: state => state.encoders.filter(enc => {
        return enc.layerIndex === (state.selectedLayerIndex !== null ? state.selectedLayerIndex : 0)
      }).sort((enc1, enc2) => {
        return enc1.index > enc2.index
      }),
    selectedLayer: state => state.layers.find(lay => lay.index === state.selectedLayerIndex),
  },
  actions: {
    deleteLayerAndEncoders({commit, dispatch}, layerIndex) {
      commit(DELETE_LAYER_ENCODERS, layerIndex)
      commit(DELETE_LAYER, layerIndex)
      dispatch('selectDefaultLayer')
    },
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
        index: getters.nextLayerIndex,
        color: DEFAULT_LAYER_COLOR,
      })
    },
    importData({commit, dispatch}, jsonData) {
      return new Promise((resolve, reject) => {
        try {
          // data is JSON string
          const importedState = JSON.parse(jsonData)
          commit(SET_LAYERS, importedState.layers)
          commit(SET_ENCODERS, importedState.encoders)
          commit(SET_ENCODERS_NB, importedState.encodersNb)
          dispatch('selectDefaultLayer')
          resolve()
        } catch (e) {
          reject()
        }
      })
      
    },
    selectDefaultLayer({commit, state}) {
      // select first layer of the array of layers
      commit(SELECT_LAYER, state.layers.find(lay => lay !== undefined).index)
    },
    selectLayer({commit}, layerIndex) {
      commit(SELECT_LAYER, layerIndex)
    },
    updateEncoderAction({commit}, {index, rotation, action}) {
      commit(UPDATE_ENCODER_ACTION, {index, rotation, action})
    },
    updateEncoderActionType({commit}, {index, rotation, actionType}) {
      commit(UPDATE_ENCODER_ACTION_TYPE, {index, rotation, actionType})
    },
    updateLayer({commit}, {index, name, slug, color}) {
      commit(UPDATE_LAYER, {index, name, slug, color})
    },
  },
  mutations: {
    [ADD_NEW_LAYER] (state, newLayer) {
      state.layers.push(newLayer)
    },
    [ADD_ENCODERS] (state, encoders) {
      Vue.set(state, 'encoders', state.encoders.concat(encoders))
    },
    [DELETE_LAYER] (state, layerIndex) {
      state.layers = state.layers.filter(l => l.index !== layerIndex)
    },
    [DELETE_LAYER_ENCODERS] (state, layerIndex) {
      state.encoders = state.encoders.filter(e => e.layerIndex !== layerIndex)
    },
    [SELECT_LAYER] (state, layerIndex) {
      state.selectedLayerIndex = layerIndex
    },
    [SET_ENCODERS] (state, encoders) {
      Vue.set(state, 'encoders', encoders)
    },
    [SET_ENCODERS_NB] (state, encodersNb) {
      state.encodersNb = encodersNb
    },
    [SET_LAYERS] (state, layers) {
      Vue.set(state, 'layers', layers)
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
    },
    [UPDATE_LAYER] (state, {index, name, slug, color}) {
      const curLayerIndex = state.layers.findIndex(l => l.index === index)
      let curLayer = state.layers[curLayerIndex]
      curLayer.name = name
      curLayer.slug = slug
      curLayer.color = color
      Vue.set(state.layers, curLayerIndex, curLayer)
    },
  },
  modules: {
    layerEditModal
  }
})
