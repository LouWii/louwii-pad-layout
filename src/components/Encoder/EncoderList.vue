<template>
  <div class="encoder-list">
    <div class="encoders-container">
      <encoder-item v-for="encoder in selectedEncoders" :key="encoder.index" :encoder="encoder" />
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import EncoderItem from '@/components/Encoder/EncoderItem'

export default {
  name: 'EncoderList',
  components: {EncoderItem},
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
    justify-content: space-between;
  }

  .encoder-symbol {
    flex-grow: 0;
    margin-bottom: 1rem;
    width: calc(100% / 3 - .8rem);
  }
}
</style>