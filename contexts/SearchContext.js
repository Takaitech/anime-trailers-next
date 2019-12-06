import React, { createContext, useReducer } from 'react'
import { searchReducer } from '../reducers/searchReducer'

export const SearchContext = createContext('') 

const SearchContextProvider = (props) => {
    const [query, dispatch] = useReducer(searchReducer,'')

    return(
        <SearchContext.Provider value={{query, dispatch}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider