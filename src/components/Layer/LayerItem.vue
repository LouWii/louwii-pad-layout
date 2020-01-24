<template>
  <div :class="[{active: isSelected}, 'layer-item']" @click.prevent="selectLayerFromSlug(layer.slug)">
    <div class="layer-name">{{ layer.name }}</div>
    <div class="layer-slug">{{ layer.slug }}</div>
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
      return this.selectedLayer.slug === this.layer.slug
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
}
</style>