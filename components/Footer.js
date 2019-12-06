import React, { useContext} from 'react'
import { AnimeContext } from '../contexts/AnimeContext'
import { OverlayContext } from '../contexts/OverlayContext'
const Footer = () =>  {

    const { selected } = useContext(AnimeContext)
    const { dispatch } = useContext(OverlayContext)

    const showOverlay = () => {
        if(!Object.keys(selected).length == 0) {
            dispatch({type:'HIDE_SHOW_OVERLAY', boolean:false})
        }
    }

    return(
        <div className="footer">
            <input onClick={(e) => showOverlay(e)} type="button" value="VIDEOS"></input>
            <div className="clipShape"></div>
            <div className="buttonWrapper">
            </div>
            <style jsx>{`
                .footer {
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    position: absolute;
                    bottom: 0;
                    z-index: 0;
                }

                .clipShape {
                    flex: 0 0 5%;

                    min-height: 150px;
                    background-color: #E6E6E6;
                    clip-path: polygon(100% 0, 87% 100%, 100% 100%);

                }

                .buttonWrapper {
                    background-color: #E6E6E6;
                    min-height: 150px;
                    flex: 0 0 30%;
                }

                input {
                    background-color: ${!Object.keys(selected).length == 0 ? '#fd6568' : '#C3C3C3'};
                    color: black;
                    height: 75px;
                    flex: 0 0 50%;
                    position:relative;
                    left: 25%;
                    top: 37.5px;               
                    -webkit-clip-path: polygon(10% 10%, 89% 6%, 94% 91%, 10% 90%);
                    clip-path: polygon(10% 10%, 89% 6%, 94% 91%, 10% 90%);
                }

            `}
            </style>
        </div>
    )
}

export default Footer