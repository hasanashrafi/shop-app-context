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



export { shortestTitle, searchProducts, filterProducts }