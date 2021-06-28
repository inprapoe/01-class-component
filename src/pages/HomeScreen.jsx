import React from 'react'
import Animes from '../components/Animes/Animes.jsx';
import useFetch from '../services/hooks/useFetch.js'
import Loading from '../components/Response/Loading/Loading.jsx'
import Error from '../components/Response/Error/Error.jsx';
import getAnimes from '../services/data/getAnimes.js';


const HomeScreen = () => {
    const {data, loading, error} = useFetch("https://api.jikan.moe/v3/search/anime?q=doraemon"); 
    const animes = getAnimes(data, loading);  

    return (
        <div className="grid w-full min-h-screen py-20 mt-16 lg:mt-20 place-items-center">
            {
                loading === true
                ? (
                    <Loading/>
                ) : error ? (
                    <Error error={error}/>
                ) : loading === false && animes.length !== 0
                ? (
                    <Animes animes={animes}/>               
                ) : ''
            }    
                          
        </div>
    )
}

export default HomeScreen
