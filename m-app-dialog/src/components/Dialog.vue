<template>
  <div class="m-dialog-wrap" :class="{active: visible}">
    <div class="m-dialog">
      <div class="m-dialog-title">{{title}}</div>
      <span class="m-dialog-close" @click="handleCancel">X</span>
      <slot name="content"></slot>
      <div>
        <span v-for="(item, index) in btns" :key="index" @click="item.handler">{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['visible', 'title', 'onCancel', 'onConfirm', 'btns'],
  methods: {
    handleCancel() {
      this.$emit('onCancel')
    }
  }
};
</script>

<style>
</style>