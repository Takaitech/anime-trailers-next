import React, { useContext, useEffect, useRef} from 'react'
import { AnimeContext } from '../contexts/AnimeContext'
import { OverlayContext } from '../contexts/OverlayContext'
import { device } from '../devices'
const Footer = () =>  {

    const { selected } = useContext(AnimeContext)
    const { dispatch } = useContext(OverlayContext)
    const buttonRef = useRef() 
    const showOverlay = () => {
        if(!Object.keys(selected).length == 0) {
            dispatch({type:'HIDE_SHOW_OVERLAY', boolean:false})
        }
    }

    useEffect(() => {
    },[selected])

    return( 
        <div className="footer">
            <div className="buttonWrapper">
                <div ref={buttonRef} className={`openTrailers ${!Object.keys(selected).length == 0 ? 'animate' +selected.mal_id : ""}`}  onClick={(e) => showOverlay(e)} type="button" ><span>TRAILERS</span></div>
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


                .buttonWrapper {
                    background-color: #E6E6E6;
                    min-height: 150px;
                    flex: 0 0 30%;
                    position:relative;

                }

                .openTrailers {
                    background-color: ${!Object.keys(selected).length == 0 ? '#fd6568' : '#C3C3C3'};
                    height: 75px;
                    position:absolute;
                    left: -75px;
                    top: 37.5px;
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    width:  150px;
                    max-width: 300px;
                }

                .${'animate' +selected.mal_id} {
                    animation: animate .5s forwards;
                }

                span {
                    font-family: council, sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    font-size: 2em;
                    color: black;
                }

                @keyframes animate {
                    0% {
                        -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
                    }
                    100% {
                        -webkit-clip-path: polygon(10% 10%, 89% 6%, 94% 91%, 10% 90%);
                        clip-path: polygon(10% 10%, 89% 6%, 94% 91%, 10% 90%);
                    }
                }

                @media ${device.laptop} {
                    .buttonWrapper {
                        margin-right: 10%;
    
                    }
                }

            `}
            </style>
        </div>
    )
}

export default Footer