<template>
  <div>
    <div v-for="item in items">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'

export default {
  data(){
    return {
      items: []
    }
  },
  created(){
    fetchJobsList()
      .then(response => this.items = response.data)
      .catch(error => console.log(error))
  }
}
</script>

<style>

</style>
