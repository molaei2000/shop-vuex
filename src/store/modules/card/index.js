import {
    ADD_PRODUCT,
    ADD_QUANTITY,
    DELETE_ITEM
} from './types'

const items = JSON.parse(localStorage.getItem('card'))?.items ?? []

export const namespaced = true


export const state = () => ({
    items
})

export const getters = {
    subtotal(state) {
        return state.items.reduce((prev, item) => {
            return (item.price * item.quantity) + prev
        }, 0)

    },
    tax:(state, getters) => getters.subtotal * 0.09,
    total:(state, getters) => getters.tax + getters.subtotal
}
export const mutations = {
    [ADD_PRODUCT](state, payload) {
        const product = state.items.find(product => product.id === payload.id)
        if (product) {
            product.quantity++
        } else {
            state.items.push({
                ...payload,
                quantity: 1
            })
        }
    },
    [ADD_QUANTITY](state, payload) {
        const product = state.items.find(pro => pro.id === payload.product.id)
        product.quantity = payload.quantity
    },
    [DELETE_ITEM](state, payload) {
        state.items = state.items.filter(pro => pro.id !== payload.id)
    }
}
export const actions = {
    addItem({
        commit,
        state
    }, payload) {
        commit(ADD_PRODUCT, payload)
        localStorage.setItem('card', JSON.stringify(state))
    },
    addQuantity({
        commit,
        state
    }, payload) {
        commit(ADD_QUANTITY, payload)
        localStorage.setItem('card', JSON.stringify(state))
    },
    deleteItem({
        commit,
        state
    }, payload) {
        commit(DELETE_ITEM, payload)
        localStorage.setItem('card', JSON.stringify(state))
    }
}