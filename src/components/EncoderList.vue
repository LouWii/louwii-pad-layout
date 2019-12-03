<template>
  <div class="encoder-list">
    <div class="encoders-container">
      <encoder-symbol v-for="(encoder, index) in encoders" :key="index" :encoder="encoder" />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import EncoderSymbol from './EncoderSymbol'

export default {
  name: 'EncoderList',
  components: {EncoderSymbol},
  computed: {
    ...mapState({
      encoders: state => state.encoders,
    })
  }
}
</script>

<style lang="scss">
.encoder-list {

}
</style>