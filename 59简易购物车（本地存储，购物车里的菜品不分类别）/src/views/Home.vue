<template>
  <div class="m-main">
    <div class="m-home">
      <Sidebar></Sidebar>
      <FoodList></FoodList>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import FoodList from '../components/FoodList'

export default {
  components: {
    Sidebar,
    FoodList,
  },
  mounted() {
    this.$store.dispatch({ type: 'getFoodList' })
  }
}
</script>
