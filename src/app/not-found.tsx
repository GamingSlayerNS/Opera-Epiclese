import Furina from '@/components/Furina';
import React from 'react'

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-8'>
            <h3>Sorry, the page you&apos;re looking for does not exist...</h3>
            <Furina />
        </div>
    )
}

export default NotFound;