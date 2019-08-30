<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <ListItem :title="item.title"></ListItem>
      </li>
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem'

export default {
  props: {
    list: Array
  },
  components: {
    ListItem
  }
}
</script>