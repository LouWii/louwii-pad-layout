<template>
  <div class="action-key-press">
    <select>
      <optgroup label="Letters">
        <option v-for="(key, idx) in keys.letters" :key="idx" :value="key.code">{{ key.name }}</option>
      </optgroup>
      <optgroup label="Specials chars">
        <option v-for="(key, idx) in keys.special" :key="idx" :value="key.code">{{ key.name }}</option>
      </optgroup>
      <optgroup label="Modifiers">
        <option v-for="(key, idx) in keys.modifiers" :key="idx" :value="key.code">{{ key.name }}</option>
      </optgroup>
      <optgroup label="Modifiers">
        <option v-for="(key, idx) in keys.modifiers" :key="idx" :value="key.code">{{ key.name }}</option>
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
</template>

<script>
import {keys} from '@/lib/keys'

export default {
  name: 'KeyPress',
  data: () => {
    return {
      keys
    }
  }
}
</script>