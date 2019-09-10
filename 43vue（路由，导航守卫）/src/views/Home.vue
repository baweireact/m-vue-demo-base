<template>
  <div class="home">
    <ul v-for="item in list" :key="item.id">
      <li @click="handleDetail(item.id)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 0,
          name: "张三"
        },
        {
          id: 1,
          name: "李四"
        }
      ]
    };
  },
  methods: {
    handleDetail(id) {
      console.log(id);
      this.$router.push(`/detail/${id}`)
      //this.$router.push({path: `/detail/${id}`})
      //this.$router.push({ name: "detail", params: { id: id } });
      //this.$router.push({ path: `/detail/${id}`, query: { id } });
    }
  }
};
</script>
