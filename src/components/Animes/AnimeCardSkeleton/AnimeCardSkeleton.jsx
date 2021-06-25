import React from 'react'
import Skeleton from 'react-loading-skeleton';

const AnimeCardSkeleton = (props) => {
    return (
        <div to='/' className="card group">
            <div className="relative w-full overflow-hidden rounded">
                <div className="card-img-container">
                    <div className="absolute inset-0 w-full h-full">
                        <Skeleton height={'100%'}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full pt-2">
                <h1 className="mb-1 text-lg font-semibold leading-snug transition duration-300 group-hover:text-blue-700"><Skeleton/></h1>
                <p className="text-sm text-gray-500"><Skeleton/></p>
            </div>
        </div>     
    )
}

export default AnimeCardSkeleton
