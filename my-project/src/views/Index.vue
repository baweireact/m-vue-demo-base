<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id" @click="handleDetail(item.id)">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        id: 0,
        title: '张三'
      }, {
        id: 1,
        title: '李四'
      }]
    }
  },
  methods: {
    handleDetail(id) {
      this.$router.push('/detail/' + id)
    }
  }
}
</script>