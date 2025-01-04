import React, { useEffect, useState } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import { BiSearch } from 'react-icons/bi';
import { filterProducts, searchProducts } from '../utils/helper';

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query, products]);

  const searchHandler = () => {
    setQuery((query) => ({ ...query, search }));
  };

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;
    const category = e.target.textContent.toLowerCase();
    setQuery((query) => ({ ...query, category }));
  };

  return (
    <div className='w-full p-2 flex flex-col justify-center mx-auto'>
      <div className='p-3 my-4 flex items-start justify-between'>
        <div className='flex items-center text-black'>
          <input
            onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
            value={search}
            type='text'
            placeholder='search...'
            className='outline-none border border-gray-400 rounded-md p-1'
          />
          <button onClick={searchHandler} className='text-3xl m-1'>
            <BiSearch />
          </button>
        </div>

        <div className='text-black'>
          <ul className='flex gap-3' onClick={categoryHandler}>
            <li className='p-1 border rounded-md cursor-pointer hover:bg-blue-700'>
              All
            </li>
            <li className='p-1 border rounded-md cursor-pointer hover:bg-blue-700'>
              Clothe
            </li>
            <li className='p-1 border rounded-md cursor-pointer hover:bg-blue-700'>
              Electronic
            </li>
            <li className='p-1 border rounded-md cursor-pointer hover:bg-blue-700'>
              Miscellaneous
            </li>
            <li className='p-1 border rounded-md cursor-pointer hover:bg-blue-700'>
              Shoes
            </li>
            <li className='p-1 border rounded-md cursor-pointer hover:bg-blue-700'>
              Miscellaneous
            </li>
          </ul>
        </div>
      </div>

      <div className='mx-auto flex flex-wrap items-center gap-3 justify-center'>
        {!displayed && <Loader />}
        {displayed && displayed.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;