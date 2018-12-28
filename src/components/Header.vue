<template>
  <div
    id="headerTop"
    class="headerTop"
  >
    <div class="menu">
      <img
        src="../assets/menu.png"
        alt=""
        v-if="!isInput"
      >
    </div>
    <h3
      class="title"
      v-if="!isInput"
    >豆瓣电影 - top250</h3>
    <span
      class="back"
      @click="$router.go(-1)"
      v-if="isInput"
    ></span>
    <input
      type="text"
      name=""
      placeholder="请输入电影名"
      v-if="isInput"
      class="myInput"
      v-focus
      :value="movieName"
      @click="changeName"
    >
    <span
      class="search"
      @click="open_search()"
    >
      <img
        src="../assets/sousuo.png"
        alt="搜索您喜欢的电影"
      >
    </span>
  </div>
</template>
<script>
export default {
  name: 'headerTop',
  data() {
    return {
      myInput: '',
    }
  },
  mounted() {

  },
  created() {
  },
  methods: {
    open_search() {
      this.$router.push({ path: '/search' })
    },
    changeName(event) {
      event.target.value = ''
    }
  },
  props: ['isInput', 'movieName'],
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  }
}
</script>
<style scoped>
.headerTop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.88rem;
  display: flex;
  background: #fff;
  text-align: center;
  z-index: 99;
  overflow: hidden;
}
.menu img,
.search img {
  position: absolute;
  top: 4px;
  width: 35px;
  height: 35px;
}

.menu img {
  left: 10px;
}
.search img {
  right: 10px;
}

.title {
  line-height: 0.88rem;
  color: crimson;
  width: 100%;
}

/*input 输入框样式*/
.myInput {
  border: 1px solid #333;
  width: 5rem;
  height: 0.7rem;
  font-size: 1em;
  border-radius: 12px;
  margin: 0.16rem 0 0 1.4rem;
  text-indent: 0.2rem;
}
.back {
  position: absolute;
  top: 0;
  left: 0.2rem;
  width: 0.88rem;
  height: 0.88rem;
  background: url(../assets/back.png) no-repeat center;
  background-size: cover;
}
</style>
