<template>
  <div class="action-rgb-change">
    <div class="rgb-action-type-container">
      <label>RGB action:</label>
      <select v-model="currentRgbActionType">
        <option value="">-- Select an RGB Action --</option>
        <option v-for="mapItem in Array.from(rgbActionTypes)" :key="mapItem[0]" :value="mapItem[0]">
          {{ mapItem[1].desc }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import {rgbActionTypes} from '@/lib/encoderActions'
import {encoderActionMixin} from '@/lib/encoderActionMixin'

export default {
  name: 'RGBChange',
  mixins: [encoderActionMixin],
  props: {
    action: {
      validator: function(value) {
        return typeof value === 'object' || value === null
      }
    },
  },
  data: () => {
    return {
      currentRgbActionType: '',
      rgbActionTypes,
    }
  },
  beforeMount() {
    this.initData()
  },
  methods: {
    emitChangeEvent() {
      this.$emit('change', {rgbActionType: this.currentRgbActionType})
    },
    initData() {
      this.initValues(['rgbActionType'])
    },
  },
}
</script>

<style lang="scss">
.action-rgb-change {
  select {
    max-width: 100%;
  }
}
</style>