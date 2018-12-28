<template>
  <div id="search">
    <HeaderTop
      :isInput="isInput"
      :movieName="movieName"
    >
      <div>
        <input
          type="text"
          value="Random"
        >
      </div>
    </HeaderTop>
    <div class="hot">
      <h2 class="name">热映电影</h2>
      <ul class="movie-name">
        <li
          v-for="(mov,index) in hotMovieList"
          :key="index"
          @click="get(mov.title,index)"
        >
          {{mov.title}}
        </li>
      </ul>

    </div>
  </div>
</template>
<script>
import HeaderTop from '@/components/Header.vue'
export default {
  name: 'search',
  data() {
    return {
      isInput: true,
      hotMovieList: [],
      movieName: '',
    }
  },
  methods: {

  },
  mounted() {
    var data = localStorage.getItem('movies')
    if (data) {
      this.hotMovieList = JSON.parse(data)
    } else {
      this.hotMovieApi();
    }
  },
  methods: {
    hotMovieApi() {
      var _this = this;
      this.$http.get('/api/v2/movie/in_theaters?city=广州&start=0&count=10')
        .then(res => {
          //   console.log(res.data)
          _this.hotMovieList = res.data.subjects
          let data = JSON.stringify(res.data.subjects)
          localStorage.setItem('movies', data)
        }).catch(err => {
          console.log(err)
        })
    },
    get(val, index) {
      this.movieName = val;
    }
  },
  components: {
    HeaderTop,
  },

}
</script>
<style scoped>
.hot {
  padding: 0.3rem;
}
.name {
  font: 600 0.5rem "Microsoft YaHei";
  color: crimson;
}
.hot .movie-name {
  margin-top: 0.3rem;
  display: flex;
  flex-wrap: wrap;
}
.hot .movie-name li {
  padding: 0.3rem;
  margin: 0.2rem;
  /* border: 1px solid #000; */
  border-radius: 4px;
  font-size: 0.2rem;
  box-shadow: 0px 0px 5px rgba(220, 20, 60, 0.8);
}
</style>