import React, { useEffect, useRef, useState } from 'react';
import { FcShop } from 'react-icons/fc';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    };
  }
  useEffect(() => {
    document.addEventListener('mousedown', closeMenu);
    return () => {
      document.removeEventListener('mousedown', closeMenu);
    };
  }, []);

  return (
    <>
      <div className="flex flex-wrap place-items-center  ">
        <section className="relative mx-auto">

          <nav className="flex justify-between bg-blue-600 text-white w-screen">
            <div className="px-5 xl:px-12 py-3 flex w-full items-center">
              <a className="text-4xl rounded font-bold font-heading" href="#">
              <FcShop className='' />
              </a>

              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li><a className="hover:text-gray-200" href="#">Home</a></li>
                <li><a className="hover:text-gray-200" href="#">Category</a></li>
                <li><a className="hover:text-gray-200" href="#">Collections</a></li>
                <li><a className="hover:text-gray-200" href="#">Contact Us</a></li>
              </ul>

              <div className="hidden xl:flex space-x-5 items-center">

                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <a className="xl:hidden flex mr-6 items-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>

              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
              </span>
            </a>


            <a className="navbar-burger self-center mr-12 md:hidden cursor-pointer" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>

          </nav>

        </section>
      </div>

      {isOpen && (
        <div  className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-end">
          <div ref={menuRef} className="bg-blue-600 w-1/2 sm:w-1/5 h-full p-4">
            <ul className='flex flex-col '>
              <li className='p-2 mt-3  cursor-pointer hover:bg-white hover:text-blue-600 rounded-md transition-all ease-in-out'><a href="/" >Home</a></li>
              <li className='p-2 mt-3  cursor-pointer hover:bg-white hover:text-blue-600 rounded-md transition-all ease-in-out'><a href="/" >Category</a></li>
              <li className='p-2 mt-3  cursor-pointer hover:bg-white hover:text-blue-600 rounded-md transition-all ease-in-out'><a href="/" >Collections</a></li>
              <li className='p-2 mt-3  cursor-pointer hover:bg-white hover:text-blue-600 rounded-md transition-all ease-in-out'><a href="/" >Contact Us</a></li>
            </ul>
          </div>

        </div>
      )}

    </>

  )
}

export default Header