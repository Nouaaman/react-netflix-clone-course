import React, { createContext, ReactNode, useReducer, } from 'react';
import TmdbReducer from './TmbdReducer';

type Props = {
    children: ReactNode;
}

type DispatchData = { type: string, payload: any };

type TmdbContextType = {
    trending: any[];
    fetchTrending(): void
};

const TmdbContext = createContext<TmdbContextType>({} as TmdbContextType)

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY
const TMDB_API_URL = process.env.REACT_APP_TMDB_API_URL
// const TMDB_IMAGE_URL = process.env.REACT_APP_TMBD_IMAGE_URL

export const TmdbProvider = ({ children }: Props) => {
    const initialState: any = {
        trending: [],
    }
    const [state, dispatch] = useReducer(TmdbReducer, initialState)

    const fetchTrending = async () => {
        const respnose = await fetch(`${TMDB_API_URL}/trending/all/day?api_key=${TMDB_API_KEY}`)
        const data = await respnose.json()
        dispatch({
            type: 'GET_TRENDING',
            payload: data
        } as DispatchData)
    }

    return <TmdbContext.Provider value={{
        trending: state.trending,
        fetchTrending,
    }}>
        {children}
    </TmdbContext.Provider>
}
export default TmdbContext




