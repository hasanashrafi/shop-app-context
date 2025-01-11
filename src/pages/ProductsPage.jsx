import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

import { createQueryObject, filterProducts, getInitialQuery, searchProducts } from '../utils/helper';

import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import CategoryBox from '../components/CategoryBox';




function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const [categories, setCategories] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      const uniqueCategories = [...new Set(products.map(product => product.category))];
      setCategories(["All", ...uniqueCategories]);
    }
  }, [products]);

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));

  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "")
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };



  return (
    <div className='mt-10 w-full p-2 flex flex-col justify-center mx-auto'>
      <CategoryBox categories={categories} setQuery={setQuery} />
      <SearchBar search={search} setSearch={setSearch} searchHandler={searchHandler} />
      <div className='mx-auto flex flex-wrap items-center gap-3 justify-center'>
        {!displayed && <Loader />}

        {displayed.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
