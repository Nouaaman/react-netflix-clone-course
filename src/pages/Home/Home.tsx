import React, { useContext, useEffect } from 'react'
import TmdbContext from '../../context/tmdb/TmdbContext'


function Home() {
    const { trending, fetchTrending } = useContext(TmdbContext)
    useEffect(() => {
        fetchTrending()
    },[])
    console.log(trending)
    return (
        <h1>home page</h1>
    )
}

export default Home