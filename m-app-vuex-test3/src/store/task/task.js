const task = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      console.log(1)
      state.count++
    }
  },
  actions: {

  }
}

export default task