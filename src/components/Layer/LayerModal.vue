<template>
  <vmodal name="modal-edit-layer" @closed="modalClosed">
    <div class="layer-edit-container">
      <h3>Edit layer</h3>
      <label>Layer Name</label>
      <input type="text" />
      <label>Layer Slug</label>
      <input type="text" />
    </div>
  </vmodal>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'LayerModal',
  computed: {
    ...mapState({
      showModal: state => state.layerEditModal.showModal
    })
  },
  methods: {
    ...mapActions(['closeModal']),
    modalClosed() {
      this.closeModal()
    }
  },
  watch: {
    showModal() {
      if (this.showModal) {
        this.$modal.show('modal-edit-layer')
      } else {
        this.$modal.hide('modal-edit-layer')
      }
    }
  }
}
</script>

<style lang="scss">
.layer-edit-container {
  padding: $global-padding;
}
</style>