import React, {createContext, useReducer } from 'react'
import { filterReducer } from '../reducers/filterReducer'

export const FilterContext = createContext('init')

const FilterContextProvider = (props) => {
    const [filter, dispatch] = useReducer(filterReducer, 'init')
    return(
        <FilterContext.Provider value={{filter, dispatch}}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider

