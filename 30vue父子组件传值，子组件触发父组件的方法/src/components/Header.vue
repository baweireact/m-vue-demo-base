<template>
  <div>
    {{title}}
    <button @click="handleUpdate">改标题</button>
  </div>
</template>

<script>
export default {
  props: ['title', 'onUpdate'],
  methods: {
    handleUpdate() {
      this.$emit('onUpdate')
    }
  }
}
</script>

<style>

</style>