import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import TmdbContext from '../../context/tmdb/TmdbContext'
import { MediaInterface } from '../../interfaces/interfaces'
import './Movies.css'


function Movies() {
    const [page, setPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)
    const [loadMovies, setLoadMovies] = useState<boolean>(true)
    
    const {
        movies,
        fetchMovies
    } = React.useContext(TmdbContext)

    React.useEffect(() => {
        fetchMovies(page)
        // eslint-disable-next-line
    }, [])


    function handleScroll() {


        let isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop - 30 <= document.documentElement.clientHeight;

        if (isAtBottom) {
            if (loadMovies) {
                console.log('at botttttoooom');
                console.log('page', page);
                setLoadMovies(false)
                setLoading(true)
                setPage(page + 2)
                fetchMovies(page)
                setTimeout(() => {
                     setLoading(false)
                }, 500);
               

            }
        }


    }

    window.addEventListener("scroll", handleScroll);
    return (

        <main className="movies">
            <h1>All Movies</h1>
            <div className='content'>
                {
                    movies.map((item: MediaInterface) => <Card item={item} key={item.id} />)
                }

            </div>
            {loading && (
                <h1>Loading...</h1>
            )}

        </main>

    )
}

export default Movies;