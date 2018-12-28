<template>
  <div id="home">
    <!-- 头部开始 -->
    <header-top></header-top>
    <!-- 电影列表内容 -->
    <index></index>
  </div>
</template>
<script>
import Index from './Index'
import HeaderTop from '../components/Header'
export default {
  name: 'home',
  data() {
    return {

    }
  },
  components: {
    Index, HeaderTop
  }
}
</script>
<style scoped>
</style>