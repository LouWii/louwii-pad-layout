<template>
  <div class="layer-title" v-if="selectedLayer">
    <h1>{{ selectedLayer.name }}</h1>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'LayerTitle',
  computed: {
    ...mapGetters(['selectedLayer'])
  }
}
</script>

<style lang="scss">
.layer-title {

}
</style>