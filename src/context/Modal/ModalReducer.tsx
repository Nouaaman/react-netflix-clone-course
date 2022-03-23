const ModalReducer = (state: any, action: { type: string; payload: boolean }) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                showModal: action.payload
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                showModal: action.payload
            };
        default:
            return state;
    }
}
export default ModalReducer
