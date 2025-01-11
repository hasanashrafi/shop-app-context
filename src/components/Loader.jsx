import React from 'react'
import { ScaleLoader } from 'react-spinners'

function Loader() {
    return (
        <div className='flex items-center min-h-screen justify-center'>
            <ScaleLoader color='#0f766e' />
        </div>
    )
}

export default Loader