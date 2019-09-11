<template>
  <div class="about">
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
