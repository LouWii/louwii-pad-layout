<template>
  <div class="layers-list">
    <h3>Layers</h3>
    <div class="layers-container">
      <layer-item v-for="(layer, index) in layers" :key="index" :layer="layer" />
    </div>
    <div class="layers-actions">
      <button type="button" @click.prevent="addLayerClick">Add Layer</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import LayerItem from '@/components/LayerItem'

export default {
  name: 'LayersList',
  components: {
    LayerItem,
  },
  computed: {
    ...mapState(['layers']),
  },
  methods: {
    ...mapActions(['generateNewLayer']),
    addLayerClick() {
      this.generateNewLayer()
    }
  }
}
</script>

<style lang="scss">
.layers-list {
  h3 {
    margin-bottom: $global-margin;
    padding: 0 $global-margin;
  }
}
</style>