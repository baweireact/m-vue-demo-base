import Api from '@/api/index.js'


const list = {
    namespaced: true,
    state: {
        list: [],
        tempList: []
    },
    getters: {
    },
    mutations: {
        initList(state, list) {
            state.list = list,
            state.tempList = list
        },
        filter(state, type) {
            if (type === 'all') {
                state.tempList = state.list
            } else {
                state.tempList = state.list.filter(item => {
                    return item.type === type
                })
            }
        }
    },
    actions: {
        initList({commit}) {
            Api.getList('').then((res) => {
                commit('initList', res.data)
            }).catch((err) => {

            })
        }
    }
}

export default list