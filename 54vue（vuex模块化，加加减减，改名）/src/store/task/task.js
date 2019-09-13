const task = {
  state: {
    count: 0
  },
  mutations: {
    onSetState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {

  }
}

export default task