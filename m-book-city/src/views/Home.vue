<template>
  <div class="home">
    <span
      v-for="(item,index) in list"
      :key="item.id"
      class="m-nav-item"
      :class="{active: currentIndex === index}"
      @click="handleNav(index)"
    >{{item.name}}</span>
    <button @click="handleOpen">{{ open? '折叠': '展开'}}</button>
    <button @click="handLoading">显示加载中</button>
    <div class="m-list" :class="{active: !open}">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
    <div class="m-loading" :class="{active: loading}">
      <span class="m-loading-text">加载中。。。</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      list: [],
      open: false,
      loading: false,
    };
  },
  methods: {
    handleNav(index) {
      this.currentIndex = index
    },
    handleOpen() {
      this.open = !this.open
    },
    handLoading() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
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
