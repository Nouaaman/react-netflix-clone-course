import React from 'react'
import TmdbContext from '../../context/tmdb/TmdbContext'
import List from '../../components/List/List'
import './Home.css'

function Home() {

    const {
        trending,
        popularMovies,
        popularTVShows,
        fetchTrending,
        fetchPopularMovies,
        fetchPopularTVShows
    } = React.useContext(TmdbContext)

    React.useEffect(() => {
        fetchTrending()
        fetchPopularMovies()
        fetchPopularTVShows()
        // eslint-disable-next-line
    }, [])

    return (
        <main className='home'>
            <List title='Trending' items={trending} />
            <List title='Popular Movies' items={popularMovies} />
            <List title='Popular TV Shows' items={popularTVShows} />
        </main>

    )


}

export default Home