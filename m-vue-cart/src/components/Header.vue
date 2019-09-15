<template>
  <div class="m-header">
    {{title}}
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$store.state.title
    }
  }
}
</script>

<style>

</style>