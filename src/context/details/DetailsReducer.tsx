const DetailsReducer = (state: any, action: { type: string; payload: any }) => {
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
        case 'GET_MOVIE':
            return {
                ...state,
                media: action.payload
            };
        case 'GET_TV':
            return {
                ...state,
                media: action.payload
            };
        default:
            return state;
    }
}
export default DetailsReducer
