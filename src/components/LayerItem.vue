<template>
  <div class="layer-item">
    <div class="layer-name">{{ layer.name }}</div>
    <div class="layer-slug">{{ layer.slug }}</div>
  </div>
</template>

<script>
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
}
</script>

<style lang="scss">
.layer-item {
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