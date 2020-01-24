<template>
  <div id="app">
    <aside>
      <layers-list/>
    </aside>
    <main>
      <layer-title/>
      <encoder-list/>
    </main>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import EncoderList from '@/components/Encoder/EncoderList'
import LayerTitle from '@/components/Layer/LayerTitle'
import LayersList from '@/components/Layer/LayersList'

export default {
  name: 'app',
  components: {
    EncoderList,
    LayerTitle,
    LayersList,
  },
  computed: {
    ...mapState(['layers', 'encodersNb'])
  },
  beforeMount: function() {
    if (this.layers.length === 0) {
      this.generateNewLayer()
      this.selectDefaultLayer()
    }
  },
  methods: {
    ...mapActions(['generateNewLayer', 'selectDefaultLayer']),
  }
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;

  display: flex;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: $global-padding-l;
}

aside {
  background: #eaeaea;
  padding: $global-margin 0;
  width: 250px;
}
</style>
