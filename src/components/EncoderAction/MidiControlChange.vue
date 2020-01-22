<template>
  <div class="midi-control-change">
    <div class="control-change-selector-container">
      <label>Control Change Type</label>
      <select class="control-type-selector" v-model="midiControlChange">
        <option v-for="mapItem in Array.from(midiControlChangeTypes)" :key="mapItem[0]" :value="mapItem[0]">
          {{ mapItem[0] }} - {{ mapItem[1].desc }}
        </option>
      </select>
    </div>
    <div class="control-change-value-container">
      <div v-if="showValueType" class="value-type-container">
        <select v-model="midiControlChangeValueChangeType">
          <option value="manual">Custom Value</option>
          <option value="autoIncrease">Automatic increase</option>
          <option value="autoDecrease">Automatic decrease</option>
        </select>
        <v-popover offset="16">
          <button class="tooltip-target">?</button>
          <template slot="popover">
            <p>
              <strong>Custom Value</strong> Enter a custom value (from 0 to 127). This value will always be used when you turn the encoder in the given direction.
            </p>
            <p>
              <strong>Automatic increase</strong> Starts with a value of 0, will increment everytime the encoder is turned. Max value is 127. The value is shared between clockwise and counterclockwise actions, so you can do <i>Automatic increase</i> one way and <i>Automatic decrease</i> the other way.
            </p>
            <p>
              <strong>Automatic decrease</strong> Same as <i>Automatic increase</i> but will decrement the value (minimum value is 0).
            </p>
          </template>
        </v-popover>
      </div>
      <div v-if="showValueField" class="value-input-container">
        <input v-model="midiControlChangeManualValue" placeholder="0 - 127" />
      </div>
    </div>
  </div>
</template>

<script>
import {midiControlChangeTypes} from '@/lib/midi'

export default {
  name: 'MidiControlChange',
  data: () => {
    return {
      midiControlChangeTypes,
      midiControlChange: null,
      midiControlChangeValueChangeType: null,
      midiControlChangeManualValue: null,
    }
  },
  computed: {
    selectedControlChange: function() {
      return this.midiControlChange !== null ? midiControlChangeTypes.get(this.midiControlChange) : null
    },
    showValueType: function() {
      return this.selectedControlChange ? this.selectedControlChange.valueDesc === '0-127' : false
    },
    showValueField: function() {
      return this.midiControlChange !== null && (this.midiControlChangeValueChangeType === 'manual' || !this.showValueType)
    }
  },
}
</script>

<style lang="scss">
  .midi-control-change {
    .control-type-selector {
      max-width: 100%;
    }

    .control-change-selector-container, .control-change-value-container, .value-type-container, .value-input-container {
      margin-bottom: $global-margin;
    }
  }
</style>