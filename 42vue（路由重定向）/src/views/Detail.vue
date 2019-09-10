<template>
  <div>{{id}}</div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id   //id
    }
  },
  mounted() {
    // axios({
    //   url: '/detail?id=' + this.$route.params.id
    // })
  }
}
</script>

<style>

</style>