<template>
  <div class="layer-item" @click.prevent="selectLayerFromSlug(layer.slug)">
    <div class="layer-name">{{ layer.name }}</div>
    <div class="layer-slug">{{ layer.slug }}</div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

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
  beforeMount: function() {
    this.layerName = this.layer.name
  },
  methods: {
    ...mapActions(['selectLayerFromSlug'])
  }
}
</script>

<style lang="scss">
.layer-item {
  cursor: pointer;
  padding: $global-margin;

  &:hover {
    background: #f7f7f7;
  }

  .layer-name {
    margin-bottom: $global-margin-s;
  }

  .layer-slug {
    font-size: $font-size-s;
  }
}
</style>