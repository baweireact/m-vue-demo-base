<template>
  <div class="home">
    {{count}}
    <Control></Control>
    <div>
      <div v-for="item in bookNav" :key="item.id">
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
import Control from '../components/Control'

export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    bookNav() {
      return this.$store.state.bookNav
    }
  },
  components: {
    Control
  },
  mounted() {
    console.log('1')
    this.$store.dispatch({type: 'getBookNav'})
  }
}
</script>
