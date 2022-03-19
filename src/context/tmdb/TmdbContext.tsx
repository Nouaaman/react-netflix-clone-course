import React, { createContext, ReactNode, useReducer, } from 'react';
import TmdbReducer from './TmbdReducer';
import { MediaInterface } from "../../interfaces/interfaces";

type Props = {
    children: ReactNode;
}

type DispatchData = { type: string, payload: MediaInterface[] }


type TmdbContextType = {
    trending: MediaInterface[],
    popularMovies: MediaInterface[],
    popularTVShows: MediaInterface[],
    fetchTrending(): void,
    fetchPopularMovies(): void
    fetchPopularTVShows(): void
};

const TmdbContext = createContext<TmdbContextType>({} as TmdbContextType)

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY
const TMDB_API_URL = process.env.REACT_APP_TMDB_API_URL
const TMDB_IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL

export const TmdbProvider = ({ children }: Props) => {
    const initialState: {
        trending: MediaInterface[],
        popularMovies: MediaInterface[],
        popularTVShows: MediaInterface[]
    } = {
        trending: [],
        popularMovies: [],
        popularTVShows: []
    }
    const [state, dispatch] = useReducer(TmdbReducer, initialState)


    //get trending movies and tvshows
    const fetchTrending = async () => {

        const respnose = await fetch(`${TMDB_API_URL}/trending/all/day?api_key=${TMDB_API_KEY}`)
        const dataJson = await respnose.json()
        let items: MediaInterface[] = []

        dataJson.results.forEach((element: any) => {

            let name = element.media_type === 'movie' ? element.title : element.name
            let item: MediaInterface = {
                id: element.id,
                name: name,
                overview: element.overview,
                release_date: element.release_date,
                poster_path: TMDB_IMAGE_URL + element.poster_path,
                backdrop_path: TMDB_IMAGE_URL + element.backdrop_path
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

            let item: MediaInterface = {
                id: element.id,
                name: element.name,
                overview: element.overview,
                release_date: element.release_date,
                poster_path: TMDB_IMAGE_URL + element.poster_path,
                backdrop_path: TMDB_IMAGE_URL + element.backdrop_path
            }
            items.push(item)

        })
        dispatch({
            type: 'GET_POPULAR_MOVIES',
            payload: items
        } as DispatchData)

    }

    //get popular movies 
    const fetchPopularTVShows = async () => {
        const respnose = await fetch(`${TMDB_API_URL}/discover/tv?api_key=${TMDB_API_KEY}&sort_by=popularity.desc`)
        const dataJson = await respnose.json()
        let items: MediaInterface[] = []

        dataJson.results.forEach((element: any) => {

            let item: MediaInterface = {
                id: element.id,
                name: element.name,
                overview: element.overview,
                release_date: element.release_date,
                poster_path: TMDB_IMAGE_URL + element.poster_path,
                backdrop_path: TMDB_IMAGE_URL + element.backdrop_path
            }
            items.push(item)

        })

        dispatch({
            type: 'GET_POPULAR_TVSHOWS',
            payload: items
        } as DispatchData)

    }

    return <TmdbContext.Provider value={{
        ...state,
        fetchTrending,
        fetchPopularMovies,
        fetchPopularTVShows
    }}>
        {children}
    </TmdbContext.Provider>
}
export default TmdbContext




