export const searchReducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_QUERY':
            return {...state, query: action.query }
        case 'ACTIVATE_SEARCH':
            return {...state, active: action.active }
        default:
            return state
    }
}