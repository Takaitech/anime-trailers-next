export const animeReducer = (state, action) => {
    switch(action.type) {
        case 'SELECT_ANIME':
            return action.selected
        default:
            return state
    }
}