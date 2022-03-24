import React, { createContext, ReactNode, useReducer, } from 'react';
import DetailsReducer from './DetailsReducer';


type Props = {
    children: ReactNode;
}

type DispatchDetailsType = { type: string, payload: boolean }

type DetailsContextType = {
    showDetails: boolean,
    toggleDetails(val: boolean): void
};

const DetailsContext = createContext<DetailsContextType>({} as DetailsContextType)

export const DetailsProvider = ({ children }: Props) => {
    const initialState = { showDetails: false }
    const [state, dispatch] = useReducer(DetailsReducer, initialState)

    const toggleDetails = (val: boolean) => {
        const type = val ? 'OPEN_DETAILS' : 'REMOVE_DETAILS'
        dispatch({
            type: type,
            payload: true
        } as DispatchDetailsType)
    }


    return <DetailsContext.Provider value={{
        ...state,
        toggleDetails
    }}>
        {children}
    </DetailsContext.Provider>
}
export default DetailsContext




