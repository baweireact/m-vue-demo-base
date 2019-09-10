<template>
  <div>{{id}}</div>
</template>

<script>
export default {
  data() {
    return {
      id: ''   //id
    }
  },
  methods: {
    setData(id) {
      this.id = id
    }
  },
  mounted() {
    // axios({
    //   url: '/detail?id=' + this.$route.params.id
    // })
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from)
    setTimeout((vm) => {
      //vm.setData({id: this.$route.params.id })
      let id = to.params.id
      next(vm => vm.setData(id))
    }, 1000)
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