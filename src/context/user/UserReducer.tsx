const UserReducer = (state: any, action: { type: string; payload: any }) => {
    switch (action.type) {
        case 'SET_ISCONNECTED':
            return {
                ...state,
                isConnected: action.payload
            };
        default:
            return state;
    }
}
export default UserReducer
