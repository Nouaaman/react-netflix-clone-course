const DetailsReducer = (state: any, action: { type: string; payload: boolean }) => {
    switch (action.type) {
        case 'OPEN_DETAILS':
            return {
                ...state,
                showDetails: action.payload
            };
        case 'REMOVE_DETAILS':
            return {
                ...state,
                showDetails: false
            };
        default:
            return state;
    }
}
export default DetailsReducer
