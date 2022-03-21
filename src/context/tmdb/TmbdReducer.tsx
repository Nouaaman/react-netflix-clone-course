const TmdbReducer = (state: any, action: { type: string; payload: any }) => {
    switch (action.type) {
        case 'GET_TRENDING':
            return {
                ...state,
                trending: action.payload,
                firstTrending: action.payload[0]
            };
        case 'GET_POPULAR_MOVIES':
            return {
                ...state,
                popularMovies: action.payload
            };
        case 'GET_POPULAR_TVSHOWS':
            return {
                ...state,
                popularTVShows: action.payload
            };
        case 'GET_MOVIES':
            return {
                ...state,
                movies: [...state.movies, ...action.payload]
            };
        default:
            return state;
    }
}
export default TmdbReducer
