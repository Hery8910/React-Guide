import  { useState, useEffect } from 'react'

export function fetchData(url) {
    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
   
    useEffect(() => {
        if(!url) return
        fetch(url)
        .then((response)=> {
            if(!response.ok){
                throw new Error("Network response not ok")
            }
            return response.json()
        })
        .then((result) => {
            setData(result)
            setLoading(false)
        })
        .catch((error) => {
            setError(error.message)
            setLoading(false)
        })
    },[url])

  
    return {data, loading, error}
}

