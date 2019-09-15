<template>
  <div class="m-main">
    购物车
  </div>
</template>

<script>
import axios from 'axios'

export default {
  mounted() {
    axios({
      url: '/api/get_my_cart'
    }).then(res => {
      if (res.data.code === 200) {
        
      }
    })
  }
}
</script>

<style>

</style>