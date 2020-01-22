import React, { createContext, useReducer } from 'react'
import { overlayReducer } from '../reducers/overlayReducer'

export const OverlayContext = createContext({open: false , trailers: []}) 

const OverlayContextProvider = (props) => {
    const [overlay, dispatch] = useReducer(overlayReducer,{open: false , trailers: []})

    return(
        <OverlayContext.Provider value={{overlay, dispatch}}>
            {props.children}
        </OverlayContext.Provider>
    )
}

export default OverlayContextProvider