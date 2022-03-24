import React, { createContext, ReactNode, useContext, useReducer, } from 'react';
import TmdbReducer from './TmbdReducer';
import { MediaInterface, SearchInterface } from "../../interfaces/interfaces";
import DetailsContext from "../details/DetailsContext";


type Props = {
    children: ReactNode;
}

type DispatchData = { type: string, payload: MediaInterface[] }


type TmdbContextType = {
    firstTrending: MediaInterface | null,
    trending: MediaInterface[],
    popularMovies: MediaInterface[],
    popularTVShows: MediaInterface[],
    movies: MediaInterface[],
    tvShows: MediaInterface[],
    latestMovies: MediaInterface[],
    latestTVShows: MediaInterface[],
    searchResults: MediaInterface[],
    fetchTrending(): void,
    fetchPopularMovies(): void,
    fetchPopularTVShows(): void,
    fetchMovies(): void,
    fetchTVShows(): void,
    fetchLatest(): void,
    searchByQuery(query: string): void,
    clearResults(): void,
};
// const {toggleModal} = useContext(ModalContext)
const TmdbContext = createContext<TmdbContextType>({} as TmdbContextType)

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY
const TMDB_API_URL = process.env.REACT_APP_TMDB_API_URL
const TMDB_IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL

export const TmdbProvider = ({ children }: Props) => {
    const initialState: {
        firstTrending: MediaInterface | null,
        trending: MediaInterface[],
        popularMovies: MediaInterface[],
        popularTVShows: MediaInterface[]
        movies: MediaInterface[],
        tvShows: MediaInterface[],
        latestMovies: MediaInterface[],
        latestTVShows: MediaInterface[],
        searchResults: MediaInterface[],

    } = {
        firstTrending: null,
        trending: [],
        popularMovies: [],
        popularTVShows: [],
        movies: [],
        tvShows: [],
        latestMovies: [],
        latestTVShows: [],
        searchResults: [],

    }
    const [state, dispatch] = useReducer(TmdbReducer, initialState)

    function clearResults() {
        dispatch({
            type: 'CLEAR_RESULTS',
            payload: []
        } as DispatchData)
    }

    const searchByQuery = async (query: string) => {
        const respnose = await fetch(`${TMDB_API_URL}/search/keyword?api_key=${TMDB_API_KEY}&query=${query}`)
        const dataJson = await respnose.json()
        let items: SearchInterface[] = []

        dataJson.results.forEach((element: any) => {

            let item: SearchInterface = {
                id: element.id,
                name: element.name,
            }
            items.push(item)
        })

        dispatch({
            type: 'GET_SEARCH_RESULTS',
            payload: items
        } as DispatchData)
    }

    //get trending movies and tvshows
    const fetchTrending = async () => {

        const respnose = await fetch(`${TMDB_API_URL}/trending/all/day?api_key=${TMDB_API_KEY}`)
        const dataJson = await respnose.json()
        let items: MediaInterface[] = []

        dataJson.results.forEach((element: any) => {

            let name = element.media_type === 'movie' ? element.title : element.name
            let poster = element.poster_path != null ? TMDB_IMAGE_URL + element.poster_path : null
            let item: MediaInterface = {
                id: element.id,
                name: name,
                overview: element.overview,
                release_date: element.release_date,
                poster_path: poster,
                backdrop_path: TMDB_IMAGE_URL + element.backdrop_path,
                media_type: element.media_type
            }
            items.push(item)

        })

        dispatch({
            type: 'GET_TRENDING',
            payload: items
        } as DispatchData)

    }

    //get popular movies 
    const fetchPopularMovies = async () => {
        const respnose = await fetch(`${TMDB_API_URL}/discover/movie?api_key=${TMDB_API_KEY}&sort_by=popularity.desc`)
        const dataJson = await respnose.json()
        let items: MediaInterface[] = []
        dataJson.results.forEach((element: any) => {
            let name = element.media_type === 'movie' ? element.title : element.name
            let poster = element.poster_path != null ? TMDB_IMAGE_URL + element.poster_path : null
            let item: MediaInterface = {
                id: element.id,
                name: name,
                overview: element.overview,
                release_date: element.release_date,
                poster_path: poster,
                backdrop_path: TMDB_IMAGE_URL + element.backdrop_path,
                media_type: 'movie'
            }
            items.push(item)

        })
        dispatch({
            type: 'GET_POPULAR_MOVIES',
            payload: items
        } as DispatchData)

    }

    //get popular tv 
    const fetchPopularTVShows = async () => {
        const respnose = await fetch(`${TMDB_API_URL}/discover/tv?api_key=${TMDB_API_KEY}&sort_by=popularity.desc`)
        const dataJson = await respnose.json()
        let items: MediaInterface[] = []

        dataJson.results.forEach((element: any) => {
            let name = element.media_type === 'movie' ? element.title : element.name
            let poster = element.poster_path != null ? TMDB_IMAGE_URL + element.poster_path : null
            let item: MediaInterface = {
                id: element.id,
                name: name,
                overview: element.overview,
                release_date: element.release_date,
                poster_path: poster,
                backdrop_path: TMDB_IMAGE_URL + element.backdrop_path,
                media_type: 'tv'
            }
            items.push(item)

        })

        dispatch({
            type: 'GET_POPULAR_TVSHOWS',
            payload: items
        } as DispatchData)

    }

    //get  movies 
    const fetchMovies = async () => {
        //fetch 3 pages
        let items: MediaInterface[] = []
        for (let index = 1; index < 4; index++) {

            const respnose = await fetch(`${TMDB_API_URL}/discover/movie?api_key=${TMDB_API_KEY}&page=${index}&sort_by=popularity.desc`)
            const dataJson = await respnose.json()


            dataJson.results.forEach((element: any) => {
                let poster = element.poster_path != null ? TMDB_IMAGE_URL + element.poster_path : null
                let item: MediaInterface = {
                    id: element.id,
                    name: element.title,
                    overview: element.overview,
                    release_date: element.release_date,
                    poster_path: poster,
                    backdrop_path: TMDB_IMAGE_URL + element.backdrop_path,
                    media_type: 'movie'
                }
                items.push(item)

            })

        }

        dispatch({
            type: 'GET_MOVIES',
            payload: items
        } as DispatchData)

    }

    //get  TV Shows 
    const fetchTVShows = async () => {
        //fetch 3 pages
        let items: MediaInterface[] = []

        for (let index = 1; index < 4; index++) {

            const respnose = await fetch(`${TMDB_API_URL}/discover/tv?api_key=${TMDB_API_KEY}&page=${index}&sort_by=popularity.desc`)
            const dataJson = await respnose.json()

            dataJson.results.forEach((element: any) => {
                let name = element.media_type === 'movie' ? element.title : element.name
                let poster = element.poster_path != null ? TMDB_IMAGE_URL + element.poster_path : null
                let item: MediaInterface = {
                    id: element.id,
                    name: name,
                    overview: element.overview,
                    release_date: element.release_date,
                    poster_path: poster,
                    backdrop_path: TMDB_IMAGE_URL + element.backdrop_path,
                    media_type: 'tv'
                }
                items.push(item)

            })
        }

        dispatch({
            type: 'GET_TVSHOWS',
            payload: items
        } as DispatchData)

    }

    //get  Latest 
    const fetchLatest = async () => {
        //chang elink to latest
        //fetch 2 pages
        let movies: MediaInterface[] = []

        for (let index = 1; index < 3; index++) {

            const respnose = await fetch(`${TMDB_API_URL}/discover/movie?api_key=${TMDB_API_KEY}&page=${index}&sort_by=release_date`)
            const dataJson = await respnose.json()

            dataJson.results.forEach((element: any) => {

                const poster = element.poster_path != null ? TMDB_IMAGE_URL + element.poster_path : null
                let item: MediaInterface = {
                    id: element.id,
                    name: element.title,
                    overview: element.overview,
                    release_date: element.release_date,
                    poster_path: poster,
                    backdrop_path: TMDB_IMAGE_URL + element.backdrop_path,
                    media_type: 'movie'
                }
                movies.push(item)

            })
        }

        dispatch({
            type: 'GET_LATEST_MOVIES',
            payload: movies
        } as DispatchData)

        //tvshows
        let tvshows: MediaInterface[] = []
        for (let index = 1; index < 3; index++) {

            const respnose = await fetch(`${TMDB_API_URL}/discover/tv?api_key=${TMDB_API_KEY}&page=${index}&sort_by=release_date`)
            const dataJson = await respnose.json()

            dataJson.results.forEach((element: any) => {
                let poster = element.poster_path != null ? TMDB_IMAGE_URL + element.poster_path : null

                let item: MediaInterface = {
                    id: element.id,
                    name: element.name,
                    overview: element.overview,
                    release_date: element.release_date,
                    poster_path: poster,
                    backdrop_path: TMDB_IMAGE_URL + element.backdrop_path,
                    media_type: 'tv'
                }
                tvshows.push(item)

            })
        }

        dispatch({
            type: 'GET_LATEST_TVSHOWS',
            payload: tvshows
        } as DispatchData)


    }


    //details




    return <TmdbContext.Provider value={{
        ...state,
        fetchTrending,
        fetchPopularMovies,
        fetchPopularTVShows,
        fetchMovies,
        fetchTVShows,
        fetchLatest,
        searchByQuery,
        clearResults
    }}>
        {children}
    </TmdbContext.Provider>
}
export default TmdbContext




