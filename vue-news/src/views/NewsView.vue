<template>
  <div>
    <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js'

export default {
  data(){
    return {
      users: []
    }
  },
  created(){
    this.$store.dispatch('FETCH_NEWS');
    // var vm = this;
    // fetchNewsList()
    //   .then(function(response){
    //     vm.users = response.data;
    //   })
    //   .catch(function(error){
    //     console.log(error)
    //   })
  }
}
</script>

<style>

</style>
