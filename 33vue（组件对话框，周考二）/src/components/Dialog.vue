<template>
  <div class="m-dialog-wrap" :class="{active:visible}" >
    <div class="m-dialog">
      <div class="m-dialog-title">{{title}}</div>
      <span class="m-dialog-close" @click="handleCancel">X</span>
      <slot></slot>
      <div class="m-dialog-footer">
        <span v-for="(item, index) in btns" :key="index" @click="item.handler" class="m-dialog-btn">{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["visible", 'title', 'onCancel', 'btns'],
  methods: {
    handleCancel() {
      this.$emit('onCancel')
    }
  }
}
</script>

<style>

</style>