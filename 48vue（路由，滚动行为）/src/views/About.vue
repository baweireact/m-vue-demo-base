<template>
  <div class="m-index-wrap">
    {{username}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: this.$route.params.username
    }
  }
}
</script>
