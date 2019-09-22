<template>
  <div class="m-loading" :class="{active: loading}">
    <span class="m-loading-text">loading...</span>
  </div>
</template>

<script>
export default {
  props: ['loading']
}
</script>

<style>

</style>