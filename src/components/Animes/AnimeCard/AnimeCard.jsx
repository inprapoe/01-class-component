import React from 'react'
import './AnimeCard.css'
import { Link } from 'react-router-dom'

const AnimeCard = (props) => {
    return (
        <Link to={`/anime/${props.anime.mal_id}`} className="card group">
            <div className="relative w-full overflow-hidden rounded">
                <div className="card-img-container">
                    <img src={props.anime.image_url} alt=""/>
                </div>
                <div className="absolute grid w-12 h-12 text-sm font-bold text-white bg-blue-500 rounded-full place-items-center right-2 bottom-2">
                    {props.anime.score}
                </div>
            </div>
            <div className="flex flex-col w-full pt-2">
                <h1 className="mb-1 text-lg font-semibold leading-snug transition duration-300 group-hover:text-blue-700">{props.anime.title}</h1>
                <p className="text-sm text-gray-500">{props.anime.episodes} Episode(s)</p>
            </div>
        </Link>
    )
}

export default AnimeCard
