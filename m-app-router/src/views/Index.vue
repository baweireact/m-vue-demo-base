<template>
  <div>
    <ul class="m-list">
      <li v-for="item in list" :key="item.id" @click="handleDetail(item.id)" class="m-list-item">
        {{item.name}}
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
        name: '张三'
      }, {
        id: 1,
        name: '李四'
      }]
    }
  },
  methods: {
    handleDetail(id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style>

</style>