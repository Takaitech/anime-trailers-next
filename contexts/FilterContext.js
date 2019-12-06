import React, {createContext, useReducer } from 'react'
import { filterReducer } from '../reducers/filterReducer'

export const FilterContext = createContext('top')

const FilterContextProvider = (props) => {
    const [filter, dispatch] = useReducer(filterReducer, 'top')
    return(
        <FilterContext.Provider value={{filter, dispatch}}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider

