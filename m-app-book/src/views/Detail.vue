<template>
  <div class="m-detail">
    <img :src="detail.avatar">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      detail: {}
    }
  },
  mounted() {
    let id = this.$route.params.id
    axios({
      url: `/api/detail?id=${id}`,
    }).then(res => {
      if (res.data.code === 200) {
        this.detail = res.data.data
      }
    })
  }
}
</script>

<style>

</style>