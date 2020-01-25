<template>
  <div class="action-midi-control-change">
    <div class="control-change-selector-container">
      <label>Control Change Type</label>
      <select class="control-type-selector" v-model="currentMidiControlChangeType">
        <option v-for="mapItem in Array.from(midiControlChangeTypes)" :key="mapItem[0]" :value="mapItem[0]">
          {{ mapItem[0] }} - {{ mapItem[1].desc }}
        </option>
      </select>
    </div>
    <div class="control-change-value-container">
      <div v-if="showValueType" class="value-type-container">
        <select v-model="currentMidiControlChangeValueChangeType">
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
              <strong>Automatic increase</strong> Starts with a value of 0, will increment everytime the encoder is turned. Max value is 127. The value is shared between clockwise and counterclockwise actions, so you can do <em>Automatic increase</em> one way and <em>Automatic decrease</em> the other way.
            </p>
            <p>
              <strong>Automatic decrease</strong> Same as <em>Automatic increase</em> but will decrement the value (minimum value is 0).
            </p>
          </template>
        </v-popover>
      </div>
      <div v-if="showValueField" class="value-input-container">
        <input type="number" min="0" max="127" v-model="currentMidiControlChangeManualValue" :placeholder="placeholderValueField" />
      </div>
      <p v-if="displayValueFieldRule">
        This control change type values are specific: <em>{{ valueFieldRule }}</em>
      </p>
    </div>
  </div>
</template>

<script>
import {midiControlChangeTypes} from '@/lib/midi'
import {encoderActionMixin} from '@/lib/encoderActionMixin'

export default {
  name: 'MidiControlChange',
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
      midiControlChangeTypes,
      currentMidiControlChangeType: null,
      currentMidiControlChangeValueChangeType: null,
      currentMidiControlChangeManualValue: null,
    }
  },
  computed: {
    selectedControlChange: function() {
      return this.currentMidiControlChangeType !== null ? midiControlChangeTypes.get(this.currentMidiControlChangeType) : null
    },
    showValueType: function() {
      return this.selectedControlChange ? this.selectedControlChange.valueDesc === '0-127' : false
    },
    showValueField: function() {
      return this.currentMidiControlChangeType !== null && (this.currentMidiControlChangeValueChangeType === 'manual' || !this.showValueType)
    },
    placeholderValueField: function() {
      return (this.selectedControlChange && this.selectedControlChange.valueDesc === '0-127') ? '0-127' : 'Custom value'
    },
    displayValueFieldRule: function() {
      return this.currentMidiControlChangeType !== null &&  !(this.selectedControlChange && this.selectedControlChange.valueDesc === '0-127')
    },
    valueFieldRule: function() {
      return this.selectedControlChange ? this.selectedControlChange.valueDesc : ''
    },
  },
  beforeMount() {
    this.initData()
  },
  methods: {
    emitChangeEvent() {
      let manualValue = this.currentMidiControlChangeManualValue
      if (manualValue !== null && manualValue !== '' && !isNaN(manualValue)) {
        manualValue = parseInt(manualValue, 10)
      }
      this.$emit(
        'change',
        {
          midiControlChangeType: this.currentMidiControlChangeType,
          midiControlChangeValueChangeType: this.currentMidiControlChangeValueChangeType,
          midiControlChangeManualValue: manualValue,
        }
      )
    },
    initData() {
      this.initValues(['midiControlChangeType', 'midiControlChangeValueChangeType', 'midiControlChangeManualValue'])
    },
  },
  watch: {
    currentMidiControlChangeType: function() {
      this.checkForEvent('midiControlChangeType')
    },
    currentMidiControlChangeValueChangeType: function() {
      this.checkForEvent('midiControlChangeValueChangeType')
    },
    currentMidiControlChangeManualValue: function() {
      this.checkForEvent('midiControlChangeManualValue')
    },
  }
}
</script>

<style lang="scss">
  .action-midi-control-change {
    .control-type-selector {
      max-width: 100%;
    }

    .control-change-selector-container, .control-change-value-container, .value-type-container, .value-input-container {
      margin-bottom: $global-margin;
    }
  }
</style>