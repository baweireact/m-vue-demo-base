<template>
  <div>
    {{gameName}}
    <div>
      <button @click="handleUpdate">改名</button>
      <button @click="handleUpdateToOld">改回原来的名字</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    gameName() {
      return this.$store.state.game.gameName;
    }
  },
  methods: {
    handleUpdate() {
      this.$store.commit({
        type: "onSetStateForGame",
        key: "gameName",
        value: "英雄联盟"
      });
    },
    handleUpdateToOld() {
      this.$store.commit({
        type: "onSetStateForGame",
        key: "gameName",
        value: "绝地求生"
      });
    }
  }
};
</script>

<style>
</style>
