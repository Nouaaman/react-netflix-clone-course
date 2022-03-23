import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import TmdbContext from '../../context/tmdb/TmdbContext'
import { MediaInterface } from '../../interfaces/interfaces'
import './TVShows.css'


function TVShows() {

    const {
        tvShows,
        fetchTVShows
    } = React.useContext(TmdbContext)

    React.useEffect(() => {
        fetchTVShows()
        // eslint-disable-next-line
    }, [])


    return (

        <main className="tvshows">
            <h2>TV Shows</h2>
            <div className='content'>
                {
                    tvShows.map((item: MediaInterface) => <Card item={item} key={item.id} />)
                }

            </div>

        </main>

    )
}

export default TVShows;