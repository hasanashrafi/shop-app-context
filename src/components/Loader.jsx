import React from 'react'
import { ScaleLoader } from 'react-spinners'

function Loader() {
    return (
        <div className='flex items-center min-h-screen'>
            <ScaleLoader color='#3357ef' />
        </div>
    )
}

export default Loader