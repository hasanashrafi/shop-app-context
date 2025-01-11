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
        (product) => product.category.name.toLowerCase() === category
    );
    return filteredProducts;
}

const createQueryObject = (currentQuery, newQuery) => {
    if (newQuery.category === "all") {
        const { category, ...rest } = currentQuery
        return rest
    }
    if (newQuery.search === "") {
        const { search, ...rest } = currentQuery
        return rest
    }
    return { ...currentQuery, ...newQuery }
}

const getInitialQuery = (searchParams) => {
    const query = {}
    const category = searchParams.get("category")
    const search = searchParams.get("search")
    if (category) query.category = category
    if (search) query.category = search
    return query
}

export { shortestTitle, searchProducts, filterProducts , getInitialQuery, createQueryObject }