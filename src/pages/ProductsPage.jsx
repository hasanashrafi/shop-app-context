import React, { useEffect, useState } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import { BiSearch } from 'react-icons/bi';
import { filterProducts, searchProducts } from '../utils/helper';
import { useSearchParams } from 'react-router-dom';

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    setSearchParams(query)
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
       

        <div className='  p-1 flex justify-center mt-4 text-black  '>  
          <ul className='w-full justify-center mx-auto flex flex-wrap p-2 items-center  md:flex md:justify-center gap-2' onClick={categoryHandler}>
            <li className='w-32 md:w-28 md:text-sm shadow-md p-2 text-center bg-white hover:text-white   rounded-md cursor-pointer hover:bg-blue-700'>
              All
            </li>
            <li className='w-32 md:w-28 md:text-sm shadow-md p-2 text-center bg-white hover:text-white   rounded-md cursor-pointer hover:bg-blue-700'>
              Clothe
            </li>
            <li className='w-32 md:w-28 md:text-sm shadow-md p-2 text-center bg-white hover:text-white   rounded-md cursor-pointer hover:bg-blue-700'>
            Electronicss
            </li>
            <li className='w-32 md:w-28 md:text-sm shadow-md p-2 text-center bg-white hover:text-white   rounded-md cursor-pointer hover:bg-blue-700'>
              Miscellaneous
            </li>
            <li className='w-32 md:w-28 md:text-sm shadow-md p-2 text-center bg-white hover:text-white   rounded-md cursor-pointer hover:bg-blue-700'>
              Shoes
            </li>
            <li className='w-32 md:w-28 md:text-sm shadow-md p-2 text-center bg-white hover:text-white   rounded-md cursor-pointer hover:bg-blue-700'>
            Furniture
            </li>
          </ul>
        </div>
     

      <div className='m-4 justify-center flex items-center text-black '>
          <input
            onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
            value={search}
            type='text'
            placeholder='search...'
            className='w-1/2 outline-none border  rounded-md p-1'
          />
          <button onClick={searchHandler} className='text-3xl text-gray-500 mx-2'>
            <BiSearch />
          </button>
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