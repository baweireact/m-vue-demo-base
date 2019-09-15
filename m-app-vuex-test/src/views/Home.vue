<template>
  <div class="home">
    home:{{count}}，游戏：{{gameName}}
    <div>
      <button @click="handleSub">减</button>
      <button @click="handleAdd">加</button>
      <button @click="handleUpdateGameName">改名</button>
      <button @click="handleUpdateGameNameBack">改回来</button>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    count() {
      //从store里取值，
      return this.$store.state.count
    },
    gameName() {
      return this.$store.state.gameName
    }
  },
  methods: {
    handleAdd() {
      //触发store里的mutation改值
      let value = this.$store.state.count + 1
      this.$store.commit({ type: 'onSetState', key: 'count', value })
    },
    handleSub() {
      let value = this.$store.state.count - 1
      this.$store.dispatch({ type: 'onSub', key: 'count', value })
    },
    handleUpdateGameName() {
      this.$store.commit({ type: 'onSetState', key: 'gameName', value: '穿越火线' })
    },
    handleUpdateGameNameBack() {
      this.$store.commit({ type: 'onSetState', key: 'gameName', value: '绝地求生' })
    }
  }
}
</script>
