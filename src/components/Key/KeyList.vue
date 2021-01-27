<template>
  <div class="keys-list">
    <div class="keys-container">
      <key-item v-for="key in selectedKeys" :key="key.index" :keyItem="key" />
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import KeyItem from '@/components/Key/KeyItem'

export default {
  name: 'KeyList',
  components: {KeyItem},
  computed: {
    ...mapGetters(['selectedKeys'])
  }
}
</script>

<style lang="scss">
.keys-list {

  .keys-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .key-item {
    flex-grow: 0;
    margin-bottom: 1rem;
    width: calc(100% / 4 - .8rem);
  }
}
</style>