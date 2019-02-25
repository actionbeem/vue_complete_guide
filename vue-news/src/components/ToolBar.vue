<template>
  <div class="header">
    <router-link to="News">News</router-link> | 
    <router-link to="Ask">Ask</router-link> | 
    <router-link to="Jobs">Jobs</router-link>
  </div>
</template>

<style scoped>
.header {
  color:#fff;
  background-color:cadetblue;
  display:flex;
  padding:8px;
}
.header .router-link-exact-active {
  color:yellow;
}
.header a {
  color:#fff;
}
</style>
