const shortestTitle = (title) => {
    const words = title.split(' ');
    return words.length > 3 ? words.slice(0, 3).join(' ') : title;
}

const searchProducts = (products, search) => {
    if (!search) return products;
    const searchedProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );
    return searchedProducts;
}

const filterProducts = (products, category) => {
    if (!category || category.toLowerCase() === 'all') return products;
    const filteredProducts = products.filter(
        (product) => product.category.toLowerCase() === category
    );
    return filteredProducts;
}

const createQueryObject = (productrentQuery, newQuery) => {
    if (newQuery.category === "all") {
        const { category, ...rest } = productrentQuery
        return rest
    }
    if (newQuery.search === "") {
        const { search, ...rest } = productrentQuery
        return rest
    }
    return { ...productrentQuery, ...newQuery }
}

const getInitialQuery = (searchParams) => {
    const query = {}
    const category = searchParams.get("category")
    const search = searchParams.get("search")
    if (category) query.category = category
    if (search) query.category = search
    return query
}

const sumProducts = (products) => {
    const productsCounter = products.reduce((counter, product) => counter + product.quantity, 0)
    const total = products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
    return { productsCounter, total }
}

const productQuantity = (state, id) => {
    const product = state.selectedProducts.findIndex((product) => product.id === id);
    if (product === -1) return 0;
    return state.selectedProducts[product].quantity;
}







export {
    shortestTitle,
    searchProducts,
    filterProducts,
    getInitialQuery,
    createQueryObject,
    sumProducts,
    productQuantity
}