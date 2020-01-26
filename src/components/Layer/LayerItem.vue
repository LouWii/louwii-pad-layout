<template>
  <div :class="[{active: isSelected}, 'layer-item']" @click.prevent="selectLayer(layer.index)">
    <div class="layer-name">{{ layer.name }}</div>
    <div class="layer-slug">{{ layer.slug }}</div>
    <div class="layer-edit"><button title="edit" @click.stop="editLayer(layer.index)">📝</button></div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'LayerItem',
  props: {
    layer: {
      required: true,
      type: Object,
    }
  },
  data: function() {
    return {
      layerName: '',
    }
  },
  computed: {
    ...mapGetters(['selectedLayer']),
    isSelected: function() {
      return this.selectedLayer.index === this.layer.index
    }
  },
  beforeMount: function() {
    this.layerName = this.layer.name
  },
  methods: {
    ...mapActions(['editLayer', 'selectLayer'])
  }
}
</script>

<style lang="scss">
.layer-item {
  cursor: pointer;
  padding: $global-margin;
  position: relative;

  &:hover {
    background: #f0f0f0;
  }

  &.active {
    background: #f7f7f7;
  }

  .layer-name {
    margin-bottom: $global-margin-s;
  }

  .layer-slug {
    font-size: $font-size-s;
  }

  .layer-edit {
    position: absolute;
    top: $global-margin;
    right: $global-margin;
  }
}
</style>