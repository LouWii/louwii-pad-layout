<template>
  <div class="layer-item">
    <input type="text" v-model="layerName" />
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
}
</style>