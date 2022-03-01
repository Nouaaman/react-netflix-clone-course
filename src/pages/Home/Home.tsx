import React from 'react'
import TmdbContext from '../../context/tmdb/TmdbContext'
import List from '../../components/List/List'
import './Home.css'

function Home() {

    const { trending, fetchTrending } = React.useContext(TmdbContext)
    React.useEffect(() => {
        fetchTrending()
        // eslint-disable-next-line
    }, [])

    return (
        <main className='home'>
            <List title='Trending' items={trending} />
            <List title='Popular Movies' items={trending} />
            <List title='Popular TV Shows' items={trending} />
        </main>

    )


}

export default Home