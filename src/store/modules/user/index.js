export default {
    state: () => ({
        user: {
            name: 'mahdi',
            id: 1,
            isLoggedin:false
        }
    }),
    getters: {
        userName: state => state.user.name
    },
    mutations: {
        SET_PRODUCTS(state, data) {
            state.products = data
        }
    }
}