import React, { useState } from 'react'
import TmdbContext from '../../context/tmdb/TmdbContext'
import List from '../../components/List/List'
import './Home.css'

function Home() {

    const {
        firstTrending,
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
            <div className='trending-header' >
                <img src={firstTrending?.backdrop_path} alt={firstTrending?.name} />

                <div className='container' >
                    <div className='content'>
                        <div className='description'>
                            <h1>{firstTrending?.name}</h1>
                            <p>{firstTrending?.overview}</p>
                        </div>
                        <div className='actions'>

                            <button className='btn-play btn'>
                                <span>
                                    <i className="fa-solid fa-play"></i>
                                </span>
                                <span>Play</span>
                            </button>

                            <button className='btn-mylist btn'>
                                <span>
                                    <i className="fa-solid fa-plus"></i>
                                </span>
                                <span>My List</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <List title='Trending' items={trending} />
            <List title='Popular Movies' items={popularMovies} />
            <List title='Popular TV Shows' items={popularTVShows} />
        </main >

    )


}

export default Home