import bus from '../utils/bus.js'

export default {
  // 재사용할 컴포넌트 옵션
  mounted(){
    bus.$emit('end:spinner')
  }
}