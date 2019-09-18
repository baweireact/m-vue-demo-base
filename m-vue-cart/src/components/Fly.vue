<template>
      <div class="m-fly-wrap">
        <div class="m-box" :class="{run: run}">
          <div
            class="m-inner" :class="{run: run}"
            :style="{backgroundImage: `url(${flyImg})` }"></div>
        </div>
      </div>
</template>

<script>
export default {
  props: ['run', 'flyImg']
}
</script>

<style>

</style>