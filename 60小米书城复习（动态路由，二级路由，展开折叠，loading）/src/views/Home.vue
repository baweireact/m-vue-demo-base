<template>
  <div class="home">
    <div v-for="item in list" :key="item.id">
      <button @click="handleDetail(item.id)">{{item.name}}</button>
    </div>
    <button @click="handleOpen">{{ open ? '折叠' : '展开' }}</button>
    <button @click="handleLoading">显示加载中</button>
    <div class="m-list" :class="{active: open}">
      1<br/>
      2<br/>
      3<br>
    </div>
    <Loading :loading="loading"></Loading>
  </div>
</template>

<script>
import Loading from '../components/Loading'

export default {
  data() {
    return {
      list: [],
      open: true,
      loading: false
    }
  },
  components: {
    Loading
  },
  methods: {
    handleDetail(id) {
      this.$router.push('/index/home/detail/' + id)
    },
    handleOpen() {
      this.open = !this.open
    },
    handleLoading() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  },
  mounted() {
    let list = [{
        id: 0,
        name: '张三'
      }, {
        id: 1,
        name: '李四'
      }]
    localStorage.setItem('list', JSON.stringify(list))
    this.list = list
  }
}
</script>
