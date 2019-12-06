export const overlayReducer = (state, action) => {
    switch(action.type) {
        case 'HIDE_SHOW_OVERLAY':
            return action.boolean
        default:
            return state
    }
}