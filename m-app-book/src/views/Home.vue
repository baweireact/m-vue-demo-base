<template>
  <div class="m-home">
    <BookNav :bookNav="bookNav" :currentIndex="currentIndex" @onNav="handleNav"></BookNav>
    <List :bookList="bookList"></List>
  </div>
</template>

<script>
import axios from 'axios'
import BookNav from '../components/BookNav'
import List from '../components/List'

export default {
  data() {
    return {
      bookNav: [],
      currentIndex: 0,
      bookList: [],
    }
  },
  components: {
    BookNav,
    List,
  },
  methods: {
    handleNav(index) {
      this.currentIndex = index
    }
  },
  mounted() {
    axios({
      url: '/api/book_nav'
    }).then(res => {
      if (res.data.code === 200) {
        this.bookNav = res.data.data
      }
    })
    axios({
      url: '/api/book_list?id=0'
    }).then(res => {
      if (res.data.code === 200) {
        this.bookList = res.data.data
      }
    })
  }
}
</script>
