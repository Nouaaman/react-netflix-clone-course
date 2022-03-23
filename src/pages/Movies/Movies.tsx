import React from 'react'
import Card from '../../components/Card/Card'
import TmdbContext from '../../context/tmdb/TmdbContext'
import { MediaInterface } from '../../interfaces/interfaces'
import './Movies.css'


function Movies() {
    // const [page, setPage] = React.useState(1)

    const {
        movies,
        fetchMovies
    } = React.useContext(TmdbContext)

    React.useEffect(() => {
        fetchMovies()
        // eslint-disable-next-line
    }, [])



    return (

        <main className="movies">
            <h2>Movies</h2>
            <div className='content'>
                {
                    movies.map((item: MediaInterface) => <Card item={item} key={item.id} />)
                }

            </div>

        </main>

    )
}

export default Movies;