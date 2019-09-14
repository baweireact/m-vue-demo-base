import axios from 'axios'

const task = {
  namespaced: true,
  state: {
    username: '',
    password: '',
    bookNav: [],
    currentIndex: 0,
    navId: 0,
    bookList: [],
  },
  mutations: {
    onSetState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    getBookNav({ commit }) {
      axios({
        url: "/api/book_nav"
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'onSetState', key: 'bookNav', value: res.data.data })
        }
      });
    },
    getBookList({ commit }, payload) {
      axios({
        url: `/api/book_list?id=${payload.id}`
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'onSetState', key: 'bookList', value: res.data.data })
          commit({ type: 'onSetState', key: 'currentIndex', value: payload.index })
          commit({ type: 'onSetState', key: 'navId', value: payload.id })
        }
      });
    },
    addBook({ commit, dispatch, state }, payload) {
      axios({
        url: '/api/add_book',
        data: {
          item: payload.item
        },
        method: 'post'
      }).then(res => {
        if (res.data.code === 200) {
          dispatch({ type: 'getBookList', index: state.currentIndex, id: state.navId })
        }
      })
    }
  }
}

export default task