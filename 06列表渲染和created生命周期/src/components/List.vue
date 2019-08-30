<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>