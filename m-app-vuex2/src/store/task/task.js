import axios from 'axios'

let currentIndex = 0, navId = 0
let store = JSON.parse(localStorage.getItem('store'))
if (store) {
  currentIndex = store.task.currentIndex
  navId = store.task.navId
}

const task = {
  namespaced: true,
  state: {
    username: '',
    password: '',
    bookNav: [],
    currentIndex: currentIndex,
    navId: navId,
    bookList: [],
    detail: {},
  },
  mutations: {
    onSetState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    login({ }, payload) {
      axios({
        url: '/api/login',
        data: {
          username: payload.username,
          password: payload.password
        },
        method: 'post'
      }).then(res => {
        if (res.data.code === 200) {
          payload.callback && payload.callback()
          localStorage.setItem('username', res.data.data.username)
        } else {
          alert(res.data.message)
        }
      })
    },
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
    },
    getDetail({ commit }, payload) {
      axios({
        url: `/api/detail?id=${payload.id}`
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'onSetState', key: 'detail', value: res.data.data })
        }
      });
    },
    addBookInDetailPage({ commit, dispatch }, payload) {
      axios({
        url: "/api/add_book",
        data: {
          item: payload.detail
        },
        method: "post"
      }).then(res => {
        if (res.data.code === 200) {
          dispatch({ type: 'getDetail', id: payload.id })
        }
      });
    }
  }
}

export default task