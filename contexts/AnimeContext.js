import React, { createContext, useReducer } from 'react'
import { animeReducer } from '../reducers/animeReducer'

export const AnimeContext = createContext({}) 

const AnimeContextProvider = (props) => {
    const [selected, dispatch] = useReducer(animeReducer,{})

    return(
        <AnimeContext.Provider value={{selected, dispatch}}>
            {props.children}
        </AnimeContext.Provider>
    )
}

export default AnimeContextProvider