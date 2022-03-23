const TmdbReducer = (state: any, action: { type: string; payload: any }) => {
    switch (action.type) {
        case 'GET_TRENDING':
            return {
                ...state,
                firstTrending: action.payload[0],
                trending: action.payload,
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
                movies: action.payload
            };
        case 'GET_TVSHOWS':
            return {
                ...state,
                tvShows: action.payload
            };
        case 'GET_LATEST_MOVIES':
            return {
                ...state,
                latestMovies: action.payload
            };
        case 'GET_LATEST_TVSHOWS':
            return {
                ...state,
                latestTVShows: action.payload
            };
        case 'GET_SEARCH_RESULTS':
            return {
                ...state,
                searchResults: action.payload
            };
        case 'CLEAR_RESULTS':
            return {
                ...state,
                searchResults: action.payload
            };


        default:
            return state;
    }
}
export default TmdbReducer
