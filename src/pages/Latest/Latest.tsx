import React from 'react'
import Card from '../../components/Card/Card'
import TmdbContext from '../../context/tmdb/TmdbContext'
import { MediaInterface } from '../../interfaces/interfaces'
import './Latest.css'


function Latest() {
    // const [page, setPage] = React.useState(1)

    const {
        latestMovies,
        latestTVShows,
        fetchLatest
    } = React.useContext(TmdbContext)

    React.useEffect(() => {
        fetchLatest()
        // eslint-disable-next-line
    }, [])



    return (

        <main className="latest">
            <h2>Latest Movies</h2>
            <div className='content'>
                {
                    latestMovies.map((item: MediaInterface) => <Card item={item} key={item.id} />)
                }

            </div>
            <h2>Latest TV Shows</h2>
            <div className='content'>
                {
                    latestTVShows.map((item: MediaInterface) => <Card item={item} key={item.id} />)
                }

            </div>

        </main>

    )
}

export default Latest;