<template>
  <div class="m-my-book">
    <div class="m-toolbar">
      <el-button @click="handleDeleteSelected">删除</el-button>
    </div>
    <el-table
      :data="myBook"
      stripe
      border
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
  computed: {
    myBook() {
      return this.$store.state.task.myBook
    },
    multipleSelection() {
      return this.$store.state.task.multipleSelection
    }
  },
  methods: {
    handleSelectChange(value) {
      this.$store.commit({ type: 'task/onSetState', key: 'multipleSelection', value })
    },
    handleDelete(row) {
      this.$store.dispatch({ type: 'task/deleteMyBook', ids: [row.id] })
    },
    handleDeleteSelected() {
      let ids = this.multipleSelection.map(item => item.id)
      this.$store.dispatch({ type: 'task/deleteMyBook', ids })
    }
  },
  mounted() {
    this.$store.dispatch('task/getMyBook')
  }
};
</script>

<style>
</style>