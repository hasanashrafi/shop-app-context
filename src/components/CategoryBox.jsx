import React, { useState } from 'react';
import { createQueryObject } from '../utils/helper';

function CategoryBox({ categories, setQuery }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;
    const category = e.target.textContent.toLowerCase();
    setSelectedCategory(category);
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className='p-1 flex justify-center mt-4 text-black'>
      <ul className='w-full justify-center mx-auto flex flex-wrap p-2 items-center md:flex md:justify-center gap-2' onClick={categoryHandler}>
        {categories.map((category, index) => (
          <li key={index} className={`w-32 md:w-36 md:text-sm shadow-md p-2 text-center ${selectedCategory === category ? "bg-teal-700 rounded-md text-white" : "bg-white hover:text-white rounded-md cursor-pointer hover:bg-teal-700"}`}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryBox;