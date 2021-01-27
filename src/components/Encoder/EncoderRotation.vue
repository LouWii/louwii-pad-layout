<template>
  <div :class="['encoder-rotation', directionString]">
    <h3>{{ directionString }}</h3>
    <item-action-selector
      @typeChange="onTypeChange"
      @actionChange="onActionChange"
      :actionType="actionType"
      :action="action"
      />
  </div>
</template>

<script>
import ItemActionSelector from '@/components/ItemAction/ItemActionSelector'

export default {
  name: 'EncoderRotation',
  components: {ItemActionSelector},
  props: {
    clockwise: {
      type: Boolean,
      required: false,
      default: true
    },
    actionType: {
      validator: function(value) {
        return typeof value === 'string' || value === null
      }
    },
    action: {
      validator: function(value) {
        return typeof value === 'object' || value === null
      }
    },
  },
  computed: {
    directionString: function() {
      return this.clockwise ? 'clockwise' : 'counterclockwise'
    }
  },
  methods: {
    onTypeChange: function(actionType) {
      this.$emit('typeChange', actionType)
    },
    onActionChange: function(action) {
      this.$emit('actionChange', action)
    }
  },
}
</script>

<style lang="scss">
.encoder-rotation {
  h3 {
    text-transform: capitalize;
  }
}
</style>