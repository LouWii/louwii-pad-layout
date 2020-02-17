<template>
  <vmodal height="auto" name="modal-edit-layer" @closed="modalClosed">
    <div class="layer-edit-container">
      <h3>Edit layer</h3>
      <div class="form-row">
        <label for="layer-name">Name</label>
        <input id="layer-name" type="text" v-model="layerNameEdit" />
      </div>
      <div class="form-row">
        <label for="layer-slug">Slug</label>
        <input id="layer-slug" type="text" v-model="layerSlugEdit" />
      </div>
      <div class="form-row">
        <label>Color</label>
        <input type="color" v-model="layerColorEdit" />
      </div>
      <div class="form-actions-row">
        <button type="button" @click="onSaveLayer">Save</button>
      </div>
    </div>
  </vmodal>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'

export default {
  name: 'LayerModal',
  data() {
    return {
      layerNameEdit: '',
      layerSlugEdit: '',
      layerColorEdit: '',
    }
  },
  computed: {
    ...mapGetters(['getLayer']),
    ...mapState({
      showModal: state => state.layerEditModal.showModal,
      layerIndex: state => state.layerEditModal.editLayerIndex,
    })
  },
  methods: {
    ...mapActions(['closeModal', 'updateLayer']),
    modalClosed() {
      this.layerNameEdit = ''
      this.layerSlugEdit = ''
      this.layerColorEdit = ''
      this.closeModal()
    },
    onSaveLayer() {
      this.updateLayer({
        index: this.layerIndex,
        name: this.layerNameEdit,
        slug: this.layerSlugEdit,
        color: this.layerColorEdit,
      })
      this.closeModal()
    }
  },
  watch: {
    showModal() {
      if (this.showModal) {
        this.layerNameEdit = this.getLayer(this.layerIndex).name
        this.layerSlugEdit = this.getLayer(this.layerIndex).slug
        this.layerColorEdit = this.getLayer(this.layerIndex).color
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