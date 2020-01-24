<template>
  <div class="encoder-action-selector">
    <div class="selector">
      <label>Action Type</label>
      <select @change="onTypeChange">
        <option value="">Select action type</option>
        <option v-for="(mapItem) in Array.from(actionTypes)" :key="mapItem[0]" :value="mapItem[0]">
          {{ mapItem[1] }}
        </option>
      </select>
    </div>
    <div class="action">
      <component :is="currentAction" @change="onActionChange"/>
    </div>
  </div>
</template>

<script>
import {actionTypes} from '@/lib/encoderActions'
import KeyPress from '@/components/EncoderAction/KeyPress'
import MidiControlChange from '@/components/EncoderAction/MidiControlChange'

export default {
  name: 'EncoderActionSelector',
  components: {KeyPress, MidiControlChange},
  data: () => {
    return {
      actionTypes,
      selectedAction: null,
    }
  },
  computed: {
    currentAction: function() {
      return this.selectedAction
    },
  },
  methods: {
    onTypeChange(event) {
      this.selectedAction = event.target.value
      this.$emit('typeChange', this.selectedAction)
    },
    onActionChange(action) {
      this.$emit('actionChange', action)
    },
  },
}
</script>

<style lang="scss">
.encoder-action-selector {
  .selector {
    margin-top: $global-margin;

    select {
      margin-bottom: $global-margin;
      width: 100%;
    }
  }
}
</style>