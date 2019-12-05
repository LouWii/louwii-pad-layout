<template>
  <div class="encoder-symbol">
    <div class="icon-container">
      <img src="https://cdn.sparkfun.com//assets/parts/1/3/5/2/8/15141-Rotary_Encoder_-_Illuminated__RGB_-01.jpg" alt="rotary encoder image" />
    </div>
    <div class="encoder-setup">

    </div>
  </div>
</template>

<script>
export default {
  name: 'EncoderSymbol',
  props: {
    encoder: {
      required: true,
      type: Object,
    }
  }
}
</script>

<style lang="scss">
.encoder-symbol {
  .icon-container {
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
}
</style>