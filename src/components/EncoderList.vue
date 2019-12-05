<template>
  <div class="encoder-list">
    <div class="encoders-container">
      <encoder-symbol v-for="(encoder, index) in selectedEncoders" :key="index" :encoder="encoder" />
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import EncoderSymbol from './EncoderSymbol'

export default {
  name: 'EncoderList',
  components: {EncoderSymbol},
  computed: {
    ...mapGetters(['selectedEncoders']),
    ...mapState({
      encoders: state => state.encoders,
    })
  }
}
</script>

<style lang="scss">
.encoder-list {

  .encoders-container {
    display: flex;
    flex-wrap: wrap;
  }

  .encoder-symbol {
    flex-grow: 1;
    width: 33%;
  }
}
</style>