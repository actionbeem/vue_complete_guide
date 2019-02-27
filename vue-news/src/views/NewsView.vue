<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus.js'
import ListMixin from '../mixins/ListMixin.js'

export default {
  components: {
    ListItem
  },
  mixins: [ListMixin],
}
</script>

<style>

</style>
