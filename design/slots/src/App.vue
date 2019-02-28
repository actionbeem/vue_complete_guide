<template>
  <div>
    <ul>
      <item>
        아이템 1
      </item>
      <item>
        아이템 2 <button>click  me</button>
      </item>
      <item>
        <div>
          아이템 3
        </div>
        <img src="./assets/endgame.png" alt="">
      </item>
      <item>
        <div style="color:blue">
          아이템 4
        </div>
      </item>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item,
  },
  data(){
    return {
      items: ["item01","item02","item03","item04","item05"]
    }
  },
}
</script>