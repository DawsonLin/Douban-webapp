<template>
  <div id="index">
    <div class="movie-category">
      <ul>
        <li
          :class="{current:index == now? true:false}"
          v-for="(item,index) in movieSubjects"
          :key="index"
          @click="changeActive(item,index)"
        >{{item}}
        </li>
      </ul>
    </div>
    <div class="movie-list">
      <ul>
        <li
          v-for="(item,index) in movieList"
          :key="index"
        >
          <div class="images">
            <img
              :src="item.images.small"
              alt=""
            >
          </div>
          <div class="movie_message">
            <h2 class="name">{{item.title}}</h2>
            <section class='movDes'>
              <p>
                <span
                  v-for="(genres,index) in item.genres"
                  :key="index"
                >{{genres}}
                </span>
              </p>
              <span>
                {{item.rating.average}}
              </span>
            </section>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
import HeaderTop from '@/components/Header'
export default {
  name: 'index',
  data() {
    return {
      movieSubjects: ['动作', '喜剧', '剧情', '爱情', '科幻', '动画', '悬疑', '惊悚', '恐怖', '犯罪', '同性', '音乐', '歌舞', '传记', '历史', '战争', '西部', '奇幻', '冒险', '灾难', '武侠', '情色'],
      now: 0,
      movieList: [],
      active: '动作片',
    }
  },
  mounted() {
    var data = localStorage.getItem('index_movie')
    if (data) {
      this.movieList = JSON.parse(data);
    } else {
      this.Api()
    }
  },
  methods: {
    changeActive(value, index) {
      this.active = value
      this.now = index
      this.Api()
    },
    Api() {
      var _this = this
      this.$http.get('/api/v2/movie/search?tag=' + this.active + '&start=0&count=20')
        .then(res => {
          _this.movieList = res.data.subjects
          let data = JSON.stringify(_this.movieList)
          localStorage.setItem('index_movie', data)
        }).catch(err => {
          console.log(err)
        })
    }
  },
  updated() {
    this.$nextTick(() => {
      console.log(this.movieList)
    })
  },
  components: {
    HeaderTop,
  }
}
</script>
<style>
.movie-category {
  text-align: center;
  height: 1rem;
  margin: 0 0.3rem;
  position: relative;
  overflow: hidden;
}
.movie-category ul {
  position: absolute;
  top: 0;
  left: 0;
  height: 1rem;
  display: flex;
  overflow-x: auto;
}
.movie-category ul li {
  flex: 0 0 23%;
  /* box-sizing: border-box; */
  padding-bottom: 0.08rem;
  line-height: 1rem;
}
.current {
  color: #000;
  border-bottom: 3px solid crimson;
}
.movie-list {
  width: 100%;
  overflow: hidden;
}
.movie-list ul {
  display: flex;
  flex-wrap: wrap; /* 当前父级没有宽高的话，需要换行，否则子级全部贴上去*/
  padding: 0.3rem 0.2rem 0.24rem 0.2rem;
}
.movie-list ul li {
  width: 3.35rem;
  overflow: hidden;
  margin: 0.2rem 0.1rem;
  border-radius: 8px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
}
.movie-list ul li .images {
  width: 3.35rem;
  height: 3.16rem;
}
.movie-list ul li .images img {
  width: 100%;
  height: 100%;
}
.movie_message {
  margin: 0.22rem 0.2rem 0 0.2rem;
  overflow: hidden;
}
.movie_message .name {
  color: #333;
  text-align: left;
  font-size: 0.24rem;
}
.movDes {
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  line-height: 0.7rem;
}
.movDes span {
  color: #999999;
  font-size: 0.2rem;
}
</style>
