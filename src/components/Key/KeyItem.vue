<template>
  <div class="key-item">
    <div class="key-icon">KEY</div>
    <div class="key-actions">
      <item-action-selector :actionType="keyItem.actionType" :action="keyItem.action" @actionChange="onActionChange" @typeChange="onTypeChange" />
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import ItemActionSelector from '@/components/ItemAction/ItemActionSelector'
import keyActionToQMKKeyCode from '@/lib/keyActionToQMKKeyCode'

export default {
  name: 'KeyItem',
  components: {ItemActionSelector},
  props: {
    keyItem: {
      type: Object,
      required: true,
    }
  },
  methods: {
    ...mapActions(['updateKeyAction', 'updateKeyActionType', 'updateKeyKeyCode']),
    onActionChange(action) {
      this.updateKeyAction({index: this.keyItem.index, action})
      const keyCode = keyActionToQMKKeyCode(this.keyItem.actionType, this.keyItem.action)
      if (keyCode) {
        this.updateKeyKeyCode({index: this.keyItem.index, keyCode})
      }
    },
    onTypeChange(actionType) {
      this.updateKeyActionType({index: this.keyItem.index, actionType})
    },
  }
}
</script>

<style lang="scss">

.key-item {
  @include item-box-shadow;
}
</style>