import React, { createContext, useReducer } from 'react'
import { overlayReducer } from '../reducers/overlayReducer'

export const OverlayContext = createContext(true) 

const OverlayContextProvider = (props) => {
    const [hidden, dispatch] = useReducer(overlayReducer,true)

    return(
        <OverlayContext.Provider value={{hidden, dispatch}}>
            {props.children}
        </OverlayContext.Provider>
    )
}

export default OverlayContextProvider