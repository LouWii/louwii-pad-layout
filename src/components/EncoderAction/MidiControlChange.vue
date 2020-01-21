<template>
  <div class="midi-control-change">
    <label>Control Change Type</label>
    <select class="control-type-selector">
      <option v-for="mapItem in Array.from(midiControlChange)" :key="mapItem[0]" :value="mapItem[0]">
        {{ mapItem[0] }} - {{ mapItem[1].desc }}
      </option>
    </select>
  </div>
</template>

<script>
import {midiControlChange} from '@/lib/midi'

export default {
  name: 'MidiControlChange',
  data: () => {
    return {
      midiControlChange
    }
  }
}
</script>

<style lang="scss">
  .midi-control-change {
    .control-type-selector {
      max-width: 100%;
    }
  }
</style>