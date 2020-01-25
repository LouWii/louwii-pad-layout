<template>
  <div class="encoder-action-selector">
    <div class="selector">
      <label>Action Type</label>
      <select v-model="currentAction">
        <option value="">Select action type</option>
        <option v-for="(mapItem) in Array.from(actionTypes)" :key="mapItem[0]" :value="mapItem[0]">
          {{ mapItem[1] }}
        </option>
      </select>
    </div>
    <div class="action">
      <component :is="currentAction" @change="onActionChange" :action="action" />
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
  props: {
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
  data: () => {
    return {
      actionTypes,
      currentAction: '',
    }
  },
  computed: {
  },
  beforeMount() {
    this.initData()
  },
  methods: {
    initData() {
      if (this.actionType !== null) {
        if (this.actionType !== this.currentAction) {
          this.currentAction = this.actionType
        }
      } else if (this.currentAction !== '') {
        this.currentAction = ''
      }
    },
    onActionChange(action) {
      this.$emit('actionChange', action)
    },
  },
  watch: {
    actionType: function() {
      this.initData()
    },
    currentAction: function() {
      if (this.actionType !== this.currentAction) {
        this.$emit('typeChange', this.currentAction)
      }
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