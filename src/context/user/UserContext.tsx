import React, { createContext, ReactNode, useReducer, } from 'react';
import UserReducer from './UserReducer';


type Props = {
    children: ReactNode;
}

type DispatchAuthentification = { type: string, payload: boolean }

type UserContextType = {
    isConnected: boolean,
    setIsConnected(auth:boolean): void
};

const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider = ({ children }: Props) => {
    const initialState: {
        isConnected: boolean,
    } = {
        isConnected: true,
    }
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const setIsConnected = (auth: boolean) => {
        dispatch({
            type: 'SET_ISCONNECTED',
            payload: auth
        } as DispatchAuthentification)
    }

    return <UserContext.Provider value={{
        ...state,
        setIsConnected
    }}>
        {children}
    </UserContext.Provider>
}
export default UserContext




