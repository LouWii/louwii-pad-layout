import Vue from 'vue'
import Vuex from 'vuex'

import layerEditModal from './modules/layerEditModal'

Vue.use(Vuex)

const ADD_NEW_LAYER              = 'addNewLayer'
const ADD_ENCODERS               = 'addEncoders'
const ADD_KEYS                   = 'addKeys'
const DELETE_LAYER               = 'deleteLayer'
const DELETE_LAYER_ENCODERS      = 'deleteLayerEncoders'
const SELECT_LAYER               = 'selectLayer'
const SET_ENCODERS               = 'setEncoder'
const SET_ENCODERS_NB            = 'setEncodersNb'
const SET_KEYS                   = 'setKeys'
const SET_KEYS_NB                = 'setKeysNb'
const SET_LAYERS                 = 'setLayers'
const UPDATE_ENCODER_ACTION      = 'updateEncoderAction'
const UPDATE_ENCODER_ACTION_TYPE = 'updateEncoderActionType'
const UPDATE_KEY_ACTION          = 'updateKeyAction'
const UPDATE_KEY_ACTION_TYPE     = 'updateKeyActionType'
const UPDATE_KEY_KEY_CODE        = 'updateKeyKeyCode'
const UPDATE_LAYER               = 'updateLayer'

const DEFAULT_LAYER_COLOR = '#123412'

export default new Vuex.Store({
  state: {
    layers: [],
    encoders: [],
    encodersNb: 6,
    keys: [],
    keysNb: 8,
    selectedLayerIndex: null,
  },
  getters: {
    getLayer: state => layerIndex => state.layers.find(lay => lay.index === layerIndex),
    jsonExport: state => JSON.stringify({layers: state.layers, encoders: state.encoders, encodersNb: state.encodersNb, keys: state.keys, keysNb: state.keysNb}),
    nextEncoderIndex: state => {
      let maxIndex = 0
      state.encoders.forEach(enc => { if (enc.index > maxIndex) maxIndex = enc.index})
      return maxIndex + 1
    },
    nextKeyIndex: state => {
      let maxIndex = 0
      state.keys.forEach(key => { if (key.index > maxIndex) maxIndex = key.index})
      return maxIndex + 1
    },
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
    selectedKeys: state => state.keys.filter(key => {
      return key.layerIndex === (state.selectedLayerIndex !== null ? state.selectedLayerIndex : 0)
    }).sort((key1, key2) => {
      return key1.index > key2.index
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
      let newLayerIndex = getters.nextLayerIndex
      let encoderIndexOffset = getters.nextEncoderIndex
      while (i < state.encodersNb) {
        newEncoders.push({
          index: i + encoderIndexOffset,
          layerIndex: newLayerIndex,
          type: null,
          clockwiseActionType: null,
          clockwiseAction: null,
          counterclockwiseActionType: null,
          counterclockwiseAction: null,
        })
        i++
      }

      commit(ADD_ENCODERS, newEncoders)

      const newKeys = [];
      let keyIndexOffset = getters.nextKeyIndex
      i = 0;
      while (i < state.keysNb) {
        newKeys.push({
          index: i + keyIndexOffset,
          layerIndex: newLayerIndex,
          type: null,
          actionType: null,
          action: null,
          keyCode: 'KC_NO',
        })
        i++
      }

      commit(ADD_KEYS, newKeys)
      
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
          if (importedState.encoders && importedState.encodersNb) {
            commit(SET_ENCODERS, importedState.encoders)
            commit(SET_ENCODERS_NB, importedState.encodersNb)
          }
          if (importedState.keys && importedState.keysNb) {
            commit(SET_KEYS_NB, importedState.keysNb)
            commit(SET_KEYS, importedState.keys)
          }
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
    updateKeyAction({commit}, {index, action}) {
      commit(UPDATE_KEY_ACTION, {index, action})
    },
    updateKeyActionType({commit}, {index, actionType}) {
      commit(UPDATE_KEY_ACTION_TYPE, {index, actionType})
    },
    updateKeyKeyCode({commit}, {index, keyCode}) {
      commit(UPDATE_KEY_KEY_CODE, {index, keyCode})
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
    [ADD_KEYS] (state, keys) {
      Vue.set(state, 'keys', state.keys.concat(keys))
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
    [SET_KEYS] (state, keys) {
      Vue.set(state, 'keys', keys)
    },
    [SET_KEYS_NB] (state, keysNb) {
      state.keysNb = keysNb
    },
    [SET_LAYERS] (state, layers) {
      Vue.set(state, 'layers', layers)
    },
    [UPDATE_ENCODER_ACTION] (state, {index, rotation, action}) {
      const curEncoderIndex = state.encoders.findIndex(enc => enc.index === index)
      const curEncoder = state.encoders[curEncoderIndex]
      if (rotation === 'clockwise') {
        curEncoder.clockwiseAction = action
      } else {
        curEncoder.counterclockwiseAction = action
      }
      Vue.set(state.encoders, curEncoderIndex, curEncoder)
    },
    [UPDATE_ENCODER_ACTION_TYPE] (state, {index, rotation, actionType}) {
      const curEncoderIndex = state.encoders.findIndex(enc => enc.index === index)
      const curEncoder = state.encoders[curEncoderIndex]
      if (rotation === 'clockwise') {
        curEncoder.clockwiseActionType = actionType
        curEncoder.clockwiseAction = null //reset the action data (if the user messed up, too bad!)
      } else {
        curEncoder.counterclockwiseActionType = actionType
        curEncoder.counterclockwiseAction = null //reset the action data (if the user messed up, too bad!)
      }
      Vue.set(state.encoders, curEncoderIndex, curEncoder)
    },
    [UPDATE_KEY_ACTION] (state, {index, action}) {
      const curKeyIndex = state.keys.findIndex(key => key.index === index)
      const curKey = state.keys[curKeyIndex]
      curKey.action = action
      Vue.set(state.keys, curKeyIndex, curKey)
    },
    [UPDATE_KEY_ACTION_TYPE] (state, {index, actionType}) {
      const curKeyIndex = state.keys.findIndex(key => key.index === index)
      const curKey = state.keys[curKeyIndex]
      curKey.actionType = actionType
      curKey.action = null //reset the action data
      Vue.set(state.keys, curKeyIndex, curKey)
    },
    [UPDATE_KEY_KEY_CODE] (state, {index, keyCode}) {
      const curKeyIndex = state.keys.findIndex(key => key.index === index)
      const curKey = state.keys[curKeyIndex]
      curKey.keyCode = keyCode
      Vue.set(state.keys, curKeyIndex, curKey)
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
