export default {
    products: state => state.products,
    getProductById: state => id => state.products.find(product => product.id === id),
}