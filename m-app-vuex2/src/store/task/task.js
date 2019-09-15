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
    myBook: [],
    multipleSelection: [],
  },
  mutations: {
    onSetState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    //登录
    login({}, payload) {
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
    //导航
    getBookNav({ commit }) {
      axios({
        url: "/api/book_nav"
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'onSetState', key: 'bookNav', value: res.data.data })
        }
      });
    },
    //列表
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
    //列表页里的加入书架
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
    //详情页
    getDetail({ commit }, payload) {
      axios({
        url: `/api/detail?id=${payload.id}`
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'onSetState', key: 'detail', value: res.data.data })
        }
      });
    },
    //详情页里的加入书架
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
    },
    //获取我的书架
    getMyBook({ commit }) {
      axios({
        url: "/api/my_book"
      }).then(res => {
        if (res.data.code === 200) {
          this.myBook = res.data.data;
          commit({ type: 'onSetState', key: 'myBook', value: res.data.data })
        }
      });
    },
    //删除我的书架里的图书
    deleteMyBook({ commit, dispatch }, payload) {
      axios({
        url: "/api/delete_book",
        data: {
          ids: payload.ids
        },
        method: "post"
      }).then(res => {
        if (res.data.code === 200) {
          dispatch({ type: 'getMyBook'})
        }
      });
    }
  }
}

export default task