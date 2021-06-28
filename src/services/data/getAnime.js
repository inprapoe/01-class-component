import getAnimes from "./getAnimes"

const getAnime = (data, animeId, loading) => {  
    let animes = getAnimes(data, loading)
    return loading === false && animes.length !== 0 ? animes.find(detail => detail.mal_id === animeId ) : '' 
}

export default getAnime
