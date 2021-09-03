import { createStore } from 'vuex'

// import user from './modules/user'
// import products from './modules/products'
import * as card from './modules/card'

const store = createStore({
    modules: {
        card,
    }
})
export default store
