import React from 'react'
import AnimeCard from './AnimeCard/AnimeCard'

const Animes = (props) => {
    
    return (
        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 responsive">
            {
                props.animes.map((anime, index) => 
                <li key={index} >
                    <AnimeCard anime={anime}/>
                </li>)
            } 
        </ul>      
    )
}

export default Animes
