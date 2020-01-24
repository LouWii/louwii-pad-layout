<template>
  <div class="encoder-symbol">
    <div class="icon-container">
      <img src="https://cdn.sparkfun.com//assets/parts/1/3/5/2/8/15141-Rotary_Encoder_-_Illuminated__RGB_-01.jpg" alt="rotary encoder image" />
    </div>
    <div class="encoder-setup">
      <encoder-rotation
        @typeChange="onClockwiseTypeChange"
        @actionChange="onClockwiseActionChange"
        :actionType="encoder.clockwiseActionType"
        :action="encoder.clockwiseAction"
        />
      <encoder-rotation
        :clockwise="false"
        @typeChange="onCounterclockwiseTypeChange"
        @actionChange="onCounterclockwiseActionChange"
        :actionType="encoder.counterclockwiseActionType"
        :action="encoder.counterclockwiseAction"
        />
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import EncoderRotation from '@/components/Encoder/EncoderRotation'

export default {
  name: 'EncoderSymbol',
  components: {EncoderRotation},
  props: {
    encoder: {
      required: true,
      type: Object,
    },
  },
  methods: {
    ...mapActions(['updateEncoderAction', 'updateEncoderActionType']),
    onClockwiseActionChange(action) {
      this.updateAction('clockwise', action)
    },
    onClockwiseTypeChange(actionType) {
      this.updateActionType('clockwise', actionType)
    },
    onCounterclockwiseActionChange(action) {
      this.updateAction('counterclockwise', action)
    },
    onCounterclockwiseTypeChange(actionType) {
      this.updateActionType('counterclockwise', actionType)
    },
    updateAction(rotation, action) {
      this.updateEncoderAction({
        index: this.encoder.index,
        rotation,
        action
      })
    },
    updateActionType(rotation, actionType) {
      this.updateEncoderActionType({
        index: this.encoder.index,
        rotation,
        actionType
      })
    },
  }
}
</script>

<style lang="scss">
.encoder-symbol {
  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.25);

  .icon-container {
    text-align: center;

    img {
      max-height: 100%;
      max-width: 200px;
    }
  }

  .encoder-setup {
    padding: $global-padding;
  }
  .encoder-rotation {
    margin-bottom: $global-margin;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>