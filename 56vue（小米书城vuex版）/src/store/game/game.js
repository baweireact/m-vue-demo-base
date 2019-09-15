const game = {
  namespaced: true,
  state: {
    gameName: '绝地求生'
  },
  mutations: {
    onSetState(state, payload) {
      state[payload.key] = payload.value
    }
  }
}

export default game