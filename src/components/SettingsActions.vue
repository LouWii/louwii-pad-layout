<template>
  <div class="settings-actions">
    <button role="button" @click.prevent="onExportClick">Export</button>
    <button role="button" @click.prevent="onImportClick">Import</button>
    <input class="import-file-input" ref="import-file-input" type="file" @change="onImportFileSelected"/>
    <button role="button" @click.prevent="onGetQmkClick">Get QMK</button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'
import {fileSave} from '@/lib/fileSaver'
import codeGenerator from '@/lib/codeGenerator'

export default {
  name: 'SettingsActions',
  computed: {
    ...mapGetters(['jsonExport']),
    ...mapState(['encoders', 'layers']),
  },
  methods: {
    ...mapActions(['importData']),
    onExportClick() {
      // TODO: This triggers a weird behavior in Firefox, the store gets reset (looses data)
      //  but Vue still displays layers and encoders...?!
      //  Interacting with them causes JS errors because things in the store are undefined
      fileSave('louwii-pad-layout.json', this.jsonExport)
    },
    onGetQmkClick() {
      codeGenerator(this.layers, this.encoders)
    },
    onImportClick() {
      this.$refs['import-file-input'].click()
    },
    onImportFileSelected() {
      const file = this.$refs['import-file-input'].files[0]
      const reader = new FileReader()
      // TODO: add loading animation over entire app
      reader.onload = function(e) {
        this.importData(e.target.result)
        .catch(() => {
          // TODO: Add better error handling
          console.error('File import failed')
        })
      }.bind(this)
      reader.readAsText(file)
    }
  }
}
</script>

<style lang="scss">
.settings-actions {
  bottom: 0;
  position: fixed;

  .import-file-input {
    height: 0;
    opacity: 0;
    width: 0;
  }
}
</style>