<template>
  <div id="app">
    <layer-modal/>
    <aside>
      <layers-list/>
      <settings-actions />
    </aside>
    <main>
      <layer-title/>
      <encoder-list/>
      <key-list/>
    </main>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import EncoderList from '@/components/Encoder/EncoderList'
import KeyList from '@/components/Key/KeyList'
import LayerTitle from '@/components/Layer/LayerTitle'
import LayersList from '@/components/Layer/LayersList'
import LayerModal from '@/components/Layer/LayerModal'
import SettingsActions from '@/components/SettingsActions'

export default {
  name: 'app',
  components: {
    EncoderList,
    KeyList,
    LayersList,
    LayerModal,
    LayerTitle,
    SettingsActions
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
