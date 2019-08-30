<template>
  <div>
    <List :list="list"></List>
  </div>
</template>

<script>
import List from '../components/List'

export default {
  data() {
    return {
      list: []
    }
  },
  components: {
    List
  },
  methods: {
  },
  created() {
    setTimeout(() => {
      this.list = [
        {
          id: '0',
          title: '张三'
        },
        {
          id: '1',
          title: '李四'
        }
      ]
    }, 500)
  }
}
</script>

