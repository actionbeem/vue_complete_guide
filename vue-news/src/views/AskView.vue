<template>
  <div>
    <div v-for="item in items">{{ item.title }}</div>  
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js'

export default {
  data(){
    return {
      items: []
    }
  },
  created(){
    var vm = this;
    fetchAskList()
      .then(function(response){
         console.log(response)
        vm.items = response.data
      })
      .catch(function(err){
        console.log(err)
      })
  }
}
</script>

<style>

</style>
