
const getAnimes = (data, loading) => {  
    const getData = (data) => {
        return data.length !== 0 ? data.results : '';
    }
    let animes = getData(data);  
    return loading === false && animes.length !== 0 ? animes : '' 
}

export default getAnimes
