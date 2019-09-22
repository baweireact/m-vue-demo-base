<template>
  <div>
    {{detail.name}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: {}
    }
  },
  mounted() {
    console.log(this.$route.params.id)
    let list = JSON.parse(localStorage.getItem('list'))
    this.detail = list[this.$route.params.id]
  }
}
</script>

<style>

</style>