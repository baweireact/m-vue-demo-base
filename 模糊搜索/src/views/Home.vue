<template>
  <div class="home">
    <input v-model="search"/><button @click="handleSearch">搜索</button>
    <div v-for="item in list" :key="item.id">
      <button @click="handleDetail(item.id)">{{item.name}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      list: []
    };
  },
  methods: {
    handleDetail(id) {
      this.$router.push("/index/home/detail/" + id);
    },
    handleSearch() {
      let list = JSON.parse(localStorage.getItem('list'))
      this.list = list.filter(item => item.name.includes(this.search))
    }
  },
  mounted() {
    let list = [
      {
        id: 0,
        name: "张三"
      },
      {
        id: 1,
        name: "李四"
      },
      {
        id: 2,
        name: "李五"
      },
      {
        id: 3,
        name: "张四"
      }
    ];
    localStorage.setItem("list", JSON.stringify(list));
    this.list = list;
  }
};
</script>
