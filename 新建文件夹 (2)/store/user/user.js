import Api from '@/api/index.js'


const user = {
    namespaced: true,
    state: {
        username: '',
        token: ''
    },
    getters: {
    },
    mutations: {
        setToken(state, payload) {
            state.username = payload.username
            state.token = payload.token
        }
    },
    actions: {
    }
}

export default user