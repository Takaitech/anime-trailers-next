import React, {useContext} from 'react'
import Filters from '../components/Filters'
import AnimeInfo from '../components/AnimeInfo'
import { OverlayContext } from '../contexts/OverlayContext'
import { AnimeContext } from '../contexts/AnimeContext'
import {device } from '../devices'

const Footer = () => {
    const { dispatch } = useContext(OverlayContext)
    const { selected } = useContext(AnimeContext)

    const showOverlay = () => {
        if(!Object.keys(selected).length == 0) {
            dispatch({type:'HIDE_SHOW_OVERLAY', boolean:false})
        }
    }

    return (
        <footer>
            <Filters></Filters>
            <AnimeInfo></AnimeInfo>
            <div className="openTrailers" onClick={() => showOverlay()}>
                <img src="icons/white-play-icon.png"></img>
            </div>
            <style jsx>{`

                footer {
                    display: flex;
                    width: 90%;
                    position: relative;
                    height: 45%;
                    flex-direction: column;
                    margin: 0 auto;
                }


                .openTrailers {
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                    background-color: #212121;
                    height:40%;
                    width: 40%;
                    clip-path: polygon(99% 0, 22% 100%, 100% 100%);

                }

                .openTrailers img {
                    position: absolute;
                    right: 5%;
                    bottom: 5%;
                }

                @media ${device.mobileS} {
                    .openTrailers img {
                        position: absolute;
                        height: 45px;
                        right: 2%;
                        bottom: 2%;
                    } 
                }

                @media ${device.tablet} {
                    .openTrailers img {
                        height: 65px;

                        right: 10%;
                        bottom: 10%;
                    }

                }

                @media ${device.laptop} {
                    footer {
                        width: 80%;
                        margin: 0 auto;
                        display: flex;
                        right: 2.8%;
                        flex-direction: row;
                        height: 30%;
                    }

                    .openTrailers {
                        position: absolute;
                        background-color: #212121;
                        height:40%;
                        width: 16%;
                        clip-path: polygon(85% 0, 0% 100%, 78% 100%);
    
                    }

                    .openTrailers img {
                        right: 25%;
                        bottom: 10%;
                        height: 40px;
                    }
                }

                @media ${device.laptopL} {
                    .openTrailers {
                        clip-path: polygon(80% 0, 3% 100%, 75% 100%);
                        width: 10%;

                    }
                    .openTrailers img {
                        right: 28%;
                        bottom: 7%;
                        height: 40px;
                    }
                }

                @media ${device.desktop} {
                    .openTrailers img {
                        right: 28%;
                        bottom: 5%;
                        height: 70px;
                    }
                }
            `}
            </style>
        </footer>
    )
}

export default Footer