<template>
  <div class="m-index-wrap">
    {{username}}
    <div>
      <router-link :to="{path: 'hebei'}">河北</router-link>
      <router-link to="shanxi">山西</router-link>
    </div>
    <router-view></router-view>
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
