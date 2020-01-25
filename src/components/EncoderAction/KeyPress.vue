<template>
  <div class="action-key-press">
    <div class="key-press-type-container">
      <label>Key press type:</label>
      <select v-model="currentKeyPressType">
        <option v-for="mapItem in Array.from(keyPressTypes)" :key="mapItem[0]" :value="mapItem[0]">
          {{ mapItem[1].name }}
        </option>
      </select>
    </div>
    <div class="key-press-container">
      <label>Key to be pressed</label>
      <select v-model="currentKeyPressed">
        <option>Select key</option>
        <optgroup label="Letters">
          <option v-for="(key, idx) in keys.letters" :key="idx" :value="key.code">{{ key.name }}</option>
        </optgroup>
        <optgroup label="Numbers">
          <option v-for="(key, idx) in keys.numbers" :key="idx" :value="key.code">{{ key.name }}</option>
        </optgroup>
        <optgroup label="Punctuation">
          <option v-for="(key, idx) in keys.punctuation" :key="idx" :value="key.code">{{ key.name }}</option>
        </optgroup>
        <optgroup label="Modifiers">
          <option v-for="(key, idx) in keys.modifiers" :key="idx" :value="key.code">{{ key.name }}</option>
        </optgroup>
        <optgroup label="Commands">
          <option v-for="(key, idx) in keys.commands" :key="idx" :value="key.code">{{ key.name }}</option>
        </optgroup>
        <optgroup label="Arrows">
          <option v-for="(key, idx) in keys.arrows" :key="idx" :value="key.code">{{ key.name }}</option>
        </optgroup>
        <optgroup label="F keys">
          <option v-for="(key, idx) in keys.frow" :key="idx" :value="key.code">{{ key.name }}</option>
        </optgroup>
        <optgroup label="Symbols">
          <option v-for="(key, idx) in keys.shifted" :key="idx" :value="key.code">{{ key.name }}</option>
        </optgroup>
        <optgroup label="Numpad">
          <option v-for="(key, idx) in keys.numpad" :key="idx" :value="key.code">{{ key.name }}</option>
        </optgroup>
      </select>
    </div>
  </div>
</template>

<script>
import {keys} from '@/lib/keys'
import {keyPressTypes} from '@/lib/encoderActions'
import {encoderActionMixin} from '@/lib/encoderActionMixin'

export default {
  name: 'KeyPress',
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
      currentKeyPressType: null,
      currentKeyPressed: null,
      keys,
      keyPressTypes,
    }
  },
  beforeMount() {
    this.initData()
  },
  methods: {
    emitChangeEvent() {
      this.$emit('change', {keyPressType: this.currentKeyPressType, keyPressed: this.currentKeyPressed})
    },
    initData() {
      this.initValues(['keyPressed', 'keyPressType'])
    },
  },
  watch: {
    action: {
      handler() {
        this.initData()
      },
      deep: true,
    },
    currentKeyPressType() {
      this.checkForEvent('keyPressType')
    },
    currentKeyPressed() {
      this.checkForEvent('keyPressed')
    },
  },
}
</script>

<style lang="scss">
.action-key-press {
  select {
    max-width: 100%;
  }
  .key-press-type-container {
    margin-bottom: $global-margin;
  }
}
</style>