<template>
  <div class="m-about">
    <div class="m-sidebar">
      <router-link to="hebei" class="m-nav-item">河北</router-link>
      <router-link to="shanxi" class="m-nav-item">山西</router-link>
    </div>
    <div class="m-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
