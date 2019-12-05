<template>
  <div id="app">
    <aside>
      <layers-list/>
    </aside>
    <main>
      <encoder-list/>
    </main>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import EncoderList from '@/components/EncoderList'
import LayersList from '@/components/LayersList'

export default {
  name: 'app',
  components: {
    EncoderList,
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
}

aside {
  background: #eee;
  padding: $global-margin 0;
  width: 250px;
}
</style>
