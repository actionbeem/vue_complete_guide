<template>
  <div>
    <div class="user-container">
      <div>
        <i class="fas fa-user"></i>
      </div>
      <div class="user-description">
        <slot name="username">
          <!-- 상위 컴포넌트에서 정의할 내용 -->
        </slot>
        <!-- <div>username: {{ info.id }}</div> -->
        <!-- <router-link :to="`/user/${userInfo.id}`">
          {{ userInfo.id }}
        </router-link> -->
        <p class="time">
          <!-- time: {{ info.created }} -->
          <slot name="time"></slot>
          <slot name="karma"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  // computed: {
  //   userInfo(){
  //     return this.$store.state.user;
  //   }
  // },
}
</script>

<style scoped>
.user-container { display:flex; align-items:center; padding:0.5rem;}
.fa-user { font-size:2.5rem; }
.user-description { padding-left:8px;}
.time { font-size:0.7rem; }
</style>
