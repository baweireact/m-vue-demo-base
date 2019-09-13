const game = {
  state: {
    gameName: '绝地求生'
  },
  mutations: {
    onSetStateForGame(state, payload) {
      state[payload.key] = payload.value
    }
  }
}

export default game