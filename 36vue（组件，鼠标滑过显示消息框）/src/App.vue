<template>
  <div>
    <div class="m-wrap">
      <List :list="list"></List>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import List from "./components/List";

export default {
  data() {
    return {
      list: []
    };
  },
  components: {
    List
  },
  mounted() {
    axios({
      url: "/api/hover_list"
    }).then(res => {
      if (res.data.code === 200) {
        this.list = res.data.data;
      }
    });
  }
};
</script>

<style>
</style>
