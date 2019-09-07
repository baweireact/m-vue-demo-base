<template>
  <div class="m-tip-box" :class="{active: info.active, detail: info.detailActive}">
    <div class="m-tip-box-name">{{item.name}}</div>
    <div v-show="info.detailActive" class="m-tip-detial">
      <span class="m-tip-num">{{info.followers}}</span> followers
      <span class="m-tip-num">{{info.repos}}</span> repos
      <span class="m-tip-num">{{info.following}}</span> following
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'info']
};
</script>

<style>
</style>