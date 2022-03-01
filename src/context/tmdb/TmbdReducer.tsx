const TmdbReducer = (state: any, action: { type: string; payload: any }) => {
    switch (action.type) {
        case 'GET_TRENDING':
            return {
                ...state,
                trending: action.payload
            };
            case 'GET_POPULAR_MOVIES':
            return {
                ...state,
                popularMovies: action.payload
            };
        default:
            return state;
    }
}
export default TmdbReducer
