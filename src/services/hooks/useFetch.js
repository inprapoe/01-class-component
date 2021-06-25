import { useEffect, useState } from "react";

const useFetch = (link) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        fetch(link) 
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })        
            .catch((err) => setError(err))
            .finally(() => {
                setLoading(false)
            })
    }, [link])

    return { data, loading, error }
}

export default useFetch;
