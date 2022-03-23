import React, { createContext, ReactNode, useReducer, } from 'react';
import ModalReducer from './ModalReducer';


type Props = {
    children: ReactNode;
}

type DispatchModalType = { type: string, payload: boolean }

type ModalContextType = {
    showModal: boolean,
    toggleModal(val: boolean): void
};

const ModalContext = createContext<ModalContextType>({} as ModalContextType)

export const UserProvider = ({ children }: Props) => {
    const initialState: {
        showModal: boolean,
    } = {
        showModal: true,
    }
    const [state, dispatch] = useReducer(ModalReducer, initialState)

    const toggleModal = (val: boolean) => {
        const type = val ? 'OPEN_MODAL' : 'CLOSE_MODAL'
        dispatch({
            type: type,
            payload: true
        } as DispatchModalType)
    }


    return <ModalContext.Provider value={{
        ...state,
        toggleModal
    }}>
        {children}
    </ModalContext.Provider>
}
export default ModalContext




