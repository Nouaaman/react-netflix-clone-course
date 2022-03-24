import React, { createContext, ReactNode, useReducer, } from 'react';
import { MediaInterface } from '../../interfaces/interfaces';
import DetailsReducer from './DetailsReducer';


type Props = {
    children: ReactNode;
}
interface MovieDetailsInterface {
    id: number,
    name: string,
    overview: string,
    release_date: Date,
    poster_path: string,
    backdrop_path: string,
    genres: any
}

type DetailsContextType = {
    showDetails: boolean,
    id: number | null,
    mediaType: string | null,
    media: MovieDetailsInterface | null,

    toggleDetails(val: boolean, id: number | null, mediaType: string | null): void
};

const DetailsContext = createContext<DetailsContextType>({} as DetailsContextType)
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY
const TMDB_API_URL = process.env.REACT_APP_TMDB_API_URL
const TMDB_IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL

export const DetailsProvider = ({ children }: Props) => {
    const initialState: {
        showDetails: boolean,
        id: number | null,
        mediaType: string | null
        media: MovieDetailsInterface | null
    } = {
        showDetails: false,
        id: null,
        mediaType: null,
        media: null
    }
    const [state, dispatch] = useReducer(DetailsReducer, initialState)

    const toggleDetails = (val: boolean, id: number | null = null, mediaType: string | null = null) => {
        const type = val ? 'OPEN_DETAILS' : 'REMOVE_DETAILS'
        dispatch({
            type: type,
            payload: val,
        })
        if (id != null && mediaType != null) {

            if (mediaType == 'movie') {
                fetchMovie(id)
            } else if (mediaType == 'tv') {
                fetchTv(id)
            }

        }

    }

    //get movie details
    const fetchMovie = async (id: number) => {


        const respnose = await fetch(`${TMDB_API_URL}/movie/${id}?api_key=${TMDB_API_KEY}`)
        const dataJson = await respnose.json()

        const element = dataJson

        let poster = element.poster_path != null ? TMDB_IMAGE_URL + element.poster_path : null
        let item: MovieDetailsInterface = {
            id: element.id,
            name: element.title,
            overview: element.overview,
            release_date: element.release_date,
            poster_path: poster,
            backdrop_path: TMDB_IMAGE_URL + element.backdrop_path,
            genres: element.genres
        }

        dispatch({
            type: 'GET_MOVIE',
            payload: item
        })

    }

    //get tv details
    const fetchTv = async (id: number) => {


        const respnose = await fetch(`${TMDB_API_URL}/tv/${id}?api_key=${TMDB_API_KEY}`)
        const dataJson = await respnose.json()

        const element = dataJson

        let poster = element.poster_path != null ? TMDB_IMAGE_URL + element.poster_path : null
        let item: MovieDetailsInterface = {
            id: element.id,
            name: element.name,
            overview: element.overview,
            release_date: element.release_date,
            poster_path: poster,
            backdrop_path: TMDB_IMAGE_URL + element.backdrop_path,
            genres: element.genres
        }

        dispatch({
            type: 'GET_TV',
            payload: item
        })

    }


    return <DetailsContext.Provider value={{
        ...state,
        toggleDetails
    }}>
        {children}
    </DetailsContext.Provider>
}
export default DetailsContext




