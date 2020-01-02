import React, { createContext, useReducer } from 'react'
import { searchReducer } from '../reducers/searchReducer'

export const SearchContext = createContext({query: "" , active: false }) 

const SearchContextProvider = (props) => {
    const [search, dispatch] = useReducer(searchReducer, { query: "" , active: false } )

    return(
        <SearchContext.Provider value={{search, dispatch}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider