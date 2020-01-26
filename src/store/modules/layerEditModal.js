const CLOSE_MODAL = 'closeModal'
const EDIT_LAYER = 'editLayer'

export default {
  state: {
    editLayerIndex: null,
    showModal: false,
  },
  getters: {},
  actions: {
    closeModal({commit}) {
      commit(CLOSE_MODAL)
    },
    editLayer({commit}, layerIndex) {
      commit(EDIT_LAYER, layerIndex)
    },
  },
  mutations: {
    [CLOSE_MODAL] (state) {
      state.showModal = false
    },
    [EDIT_LAYER] (state, layerIndex) {
      state.editLayerIndex = layerIndex
      state.showModal = true
    }
  },
}