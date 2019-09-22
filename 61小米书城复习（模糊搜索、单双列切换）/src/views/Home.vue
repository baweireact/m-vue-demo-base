<template>
  <div class="home">
    <input v-model="search"/><button @click="handleSearch">搜索</button>
    <button @click="handleSingle">{{ single ? "双排" : "单排"}}</button>
    <div class="m-list-wrap">
      <div v-for="item in list" :key="item.id" class="m-list-item" :class="{active: single}">
        <button @click="handleDetail(item.id)">{{item.name}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      list: [],
      single: true
    };
  },
  methods: {
    handleDetail(id) {
      this.$router.push("/index/home/detail/" + id);
    },
    handleSearch() {
      let list = JSON.parse(localStorage.getItem('list'))
      this.list = list.filter(item => item.name.includes(this.search))
    },
    handleSingle() {
      this.single = !this.single
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
