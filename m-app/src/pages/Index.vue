<template>
  <div class="m-wrap">
    <Header :bookNav="bookNav" :currentIndex="currentIndex" @onNav="handleNavClick"></Header>
    <Content :currentIndex="currentIndex"></Content>
  </div>
</template>

<script>
import Header from '../components/Header'
import Content from '../components/Content'
import axios from 'axios'

export default {
  data() {
    return {
      bookNav: [],
      bookList: [],
      currentIndex: '0'
    }
  },
  components: {
    Header,
    Content
  },
  methods: {
    handleNavClick(index) {
      this.currentIndex = index
    }
  },
  mounted() {
    axios({
      url: '/api/book_nav',
      method: 'get'
    }).then(res => {
      if (res.data.code === 200) {
        this.bookNav = res.data.data
      }
    })

    axios({
      url: '/api/book_list?id=0',
      method: 'get'
    }).then(res => {
      if (res.data.code === 200) {
        this.bookList = res.data.data
      }
    })
  }
}
</script>

<style>

</style>