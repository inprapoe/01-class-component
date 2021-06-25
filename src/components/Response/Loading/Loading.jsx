import React from 'react'
import AnimeCardSkeleton from '../../Animes/AnimeCardSkeleton/AnimeCardSkeleton'

const Loading = () => {
    let skeletons =[]

    for (let i = 0; i < 10; i++) {
        skeletons.push('')
    }

    return (
        <ul className="grid w-full max-w-sm gap-6 px-5 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 responsive">
            {
                skeletons.map((skeleton, index) => 
                <li key={index} >
                    <AnimeCardSkeleton/>
                </li>) 
            }
        </ul>
    )
}

export default Loading
