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
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from)
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from)
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from)
    next()
  }
}
</script>

<style>

</style>