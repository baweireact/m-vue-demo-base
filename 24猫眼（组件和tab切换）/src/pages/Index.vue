<template>
  <div class="m-wrap">
    <Header></Header>
    <Content :currentIndex="currentIndex"></Content>
    <Footer :currentIndex="currentIndex" @onNavClick="handleNavClick"></Footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  components: {
    Header,
    Content,
    Footer,
  },
  methods: {
    handleNavClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style>

</style>