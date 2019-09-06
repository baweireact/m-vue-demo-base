<template>
  <div id="app">
    <Header :title="title" @onUpdate="handleUpdate"></Header>
  </div>
</template>

<script>
import Header from './components/Header'


export default {
  name: 'app',
  data() {
    return {
      title: '标题'
    }
  },
  components: {
    Header
  },
  methods: {
    handleUpdate() {
      this.title = '新标题'
    }
  }
}
</script>