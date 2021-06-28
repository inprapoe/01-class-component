import React from 'react'
import useFetch from '../services/hooks/useFetch.js'
import Loading from '../components/Response/Loading/Loading.jsx'
import Error from '../components/Response/Error/Error.jsx';
import getAnime from '../services/data/getAnime.js';
import { useParams } from 'react-router';
import { IoStar } from 'react-icons/io5'

const DetailScreen = (props) => {
    const {data, loading, error} = useFetch("https://api.jikan.moe/v3/search/anime?q=doraemon");      
    const animeId = Number(useParams().id)
    const anime = getAnime(data, animeId, loading)
    console.log(anime)

    return (
        <div className="grid w-full min-h-screen py-20 mt-16 lg:mt-20 place-items-center">
            {
                loading === true
                ? (
                    <Loading/>
                ) : error ? (
                    <Error error={error}/>
                ) : loading === false 
                ? (
                    <div className="grid gap-6 responsive md:grid-cols-2 place-items-start lg:grid-cols-3">
                        <div className="w-full">
                            <div className="rounded-lg card-img-container">
                                <img src={anime.image_url} alt=""/>
                            </div>
                        </div>
                        <div className="grid gap-4 lg:col-span-2">
                            <h1 className="text-2xl font-bold lg:text-3xl">{anime.title}</h1>
                            <div className="flex items-center space-x-2 text-sm font-semibold">
                                <div className="flex items-center justify-center h-8 px-2 tracking-wider text-white bg-blue-600 rounded-md ">
                                    {anime.rated}
                                </div>
                                <div className="flex items-center justify-center h-8 px-2 tracking-wider text-gray-700 border border-gray-400 rounded-md ">
                                    <IoStar className="text-yellow-400"/> {anime.score}
                                </div>
                                <div className="flex items-center space-x-1 text-gray-700">
                                    <span>{anime.episodes}</span>
                                    <span className="font-semibold"> Episodes</span>
                                </div>
                            </div>
                            <p className="text-gray-500">{anime.synopsis}</p>
                        </div>
                    </div>
                ) : ''
            }                              
        </div>
    )
}

export default DetailScreen
