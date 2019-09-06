<template>
  <div>
    <div v-for="item in bookList" :key="item.id">
      <img :src="item.avatar">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bookList']
}
</script>

<style>

</style>