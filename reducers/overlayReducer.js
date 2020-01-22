export const overlayReducer = (state, action) => {
    switch(action.type) {
        case 'HIDE_SHOW_OVERLAY':
            return {...state, open: action.boolean}
        case 'UPDATE_TRAILERS':
            return {...state, trailers: action.trailers}
        default:
            return state
    }
}