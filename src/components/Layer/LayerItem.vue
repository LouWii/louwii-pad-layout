<template>
  <div :class="[{active: isSelected}, 'layer-item']" @click.prevent="selectLayer(layer.index)">
    <div class="layer-color-name">
      <span class="layer-color" :style="{background: layer.color}"></span>
      <span class="layer-name">{{ layer.name }}</span>
    </div>
    <div class="layer-slug">
      {{ layer.slug }}
    </div>
    <div class="layer-edit">
      <button title="edit" @click.stop="editLayer(layer.index)">📝</button>
    </div>
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
    }
  },
  computed: {
    ...mapGetters(['selectedLayer']),
    isSelected: function() {
      return this.selectedLayer.index === this.layer.index
    }
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

  .layer-color-name {
    margin-bottom: $global-margin-s;

    .layer-color, .layer-name {
      display: inline-block;
    }

    .layer-color {
      border: 1px solid #fff;
      height: 14px;
      margin-right: $global-margin-s;
      width: 14px;
    }
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