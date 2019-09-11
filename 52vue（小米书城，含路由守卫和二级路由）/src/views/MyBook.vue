<template>
  <div class="m-my-book">
    <div class="m-toolbar">
      <el-button @click="handleDeleteSelected">删除</el-button>
    </div>
    <el-table
      :data="myBook"
      stripe
      border
      :row-class-name="rowClassName"
      height="300"
      @selection-change="handleSelectChange"
    >
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="title" label="书名"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column label="操作" fixed="right">
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
      myBook: [],
      multipleSelection: []
    };
  },
  methods: {
    rowClassName({ row, rowIndex }) {
      return "m-row";
    },
    handleSelectChange(val) {
      this.multipleSelection = val;
    },
    handleDelete(row) {
      axios({
        url: "/api/delete_book",
        data: {
          ids: [row.id]
        },
        method: "post"
      }).then(res => {
        if (res.data.code === 200) {
          this.getMyBook()
        }
      });
    },
    handleDeleteSelected() {
      let ids = this.multipleSelection.map(item => item.id)
      axios({
        url: "/api/delete_book",
        data: {
          ids
        },
        method: "post"
      }).then(res => {
        if (res.data.code === 200) {
          this.getMyBook()
        }
      });
    },
    getMyBook() {
      axios({
        url: "/api/my_book"
      }).then(res => {
        if (res.data.code === 200) {
          this.myBook = res.data.data;
        }
      });
    }
  },
  mounted() {
    this.getMyBook()
  }
};
</script>

<style>
</style>