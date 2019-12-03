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
import EncoderList from './components/EncoderList'
import LayersList from './components/LayersList'

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
    }
  },
  methods: {
    ...mapActions(['generateNewLayer']),
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
}

body {
  min-height: 100vh;
}
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
  padding: .8rem;
  width: 250px;
}
</style>
