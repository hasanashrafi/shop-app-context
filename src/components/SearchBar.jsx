import React from 'react'
import { BiSearch } from 'react-icons/bi'

function SearchBar({ search, setSearch, searchHandler }) {
    return (
        <div className='m-4 justify-center flex items-center text-black'>
            <input
                onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
                value={search}
                type='text'
                placeholder='search...'
                className='w-1/2 outline-none border rounded-md p-1'
            />
            <button onClick={searchHandler} className='text-3xl text-gray-500 mx-2'>
                <BiSearch />
            </button>
        </div>
    )
}

export default SearchBar