<template>
  <div class="m-list-wrap">
    <Item
      v-for="item in list"
      :key="item.id"
      :item="item"
      class="m-list-item"></Item>
  </div>
</template>

<script>
import Item from './ListItem'

export default {
  props: ["list"],
  components: {
    Item
  }
};
</script>

<style>
</style>