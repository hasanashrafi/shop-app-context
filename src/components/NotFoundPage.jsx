import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-5 text-red-600">
            <div className='my-auto'>
                <h1 className='text-3xl font-bold'>404  Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <Link className='flex items-center gap-x-3 w-fit p-2 hover:text-blue-500 transition-all ease-linear rounded-md my-4 mx-auto bg-gray-300 text-gray-400' to="/">
                <BiArrowBack className='text-xl' /> Back
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;