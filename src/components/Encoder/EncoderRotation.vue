<template>
  <div :class="['encoder-rotation', directionString]">
    <h4>{{ directionString }}</h4>
    <encoder-action-selector/>
  </div>
</template>

<script>
import EncoderActionSelector from '@/components/Encoder/EncoderActionSelector'

export default {
  name: 'EncoderRotation',
  components: {EncoderActionSelector},
  props: {
    clockwise: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    directionString: function() {
      return this.clockwise ? 'clockwise' : 'counterclockwise'
    }
  }
}
</script>