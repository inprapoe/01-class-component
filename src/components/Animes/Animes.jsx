import React from 'react'
import AnimeCard from './AnimeCard/AnimeCard'

const Animes = (props) => {
    const animes = props.data.length !== 0 ? props.data.results : '';
    
    return (
        <ul className="grid w-full max-w-sm gap-6 px-5 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 responsive">
            {
                animes.map((anime, index) => 
                <li key={index} >
                    <AnimeCard anime={anime}/>
                </li>)
                // console.log(animes)
            } 
        </ul>      
    )
}

export default Animes
