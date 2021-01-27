<template>
  <div class="key-item">
    KEY
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

export default {
  name: 'KeyItem',

}
</script>

<style lang="scss">
.key-item {
  @include item-box-shadow;
}
</style>