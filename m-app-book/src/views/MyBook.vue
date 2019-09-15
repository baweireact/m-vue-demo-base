<template>
  <div>
    <!-- <div v-for="item in myBook" :key="item.id">
      <div>{{item.title}}</div>
    </div>-->
    <el-table :data="myBook" stripe>
      <el-table-column prop="title" label="书名"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      myBook: []
    };
  },
  methods: {
    handleDelete(row) {
      console.log(row);
      axios({
        url: "/api/delete",
        data: {
          ids: [row.id]
        },
        method: "post"
      }).then(res => {
        if (res.data.code === 200) {
          axios({
            url: "/api/get_my_book"
          }).then(res => {
            if (res.data.code) {
              this.myBook = res.data.data;
            }
          });
        }
      });
    }
  },
  mounted() {
    axios({
      url: "/api/get_my_book"
    }).then(res => {
      if (res.data.code) {
        this.myBook = res.data.data;
      }
    });
  }
};
</script>

<style>
</style>