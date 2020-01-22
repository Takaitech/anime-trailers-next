import React, { useState, useEffect, useContext} from 'react'
import { AnimeContext } from '../contexts/AnimeContext'
import { OverlayContext } from '../contexts/OverlayContext'
import ModalVideo from 'react-modal-video'
import { device } from '../devices'
 
const VideosOverlay = () => {
    const { selected } = useContext(AnimeContext)
    const { dispatch, overlay } = useContext(OverlayContext)

    const hideOverlay = () => {
        dispatch({type:'HIDE_SHOW_OVERLAY', open:true})
    }


    console.log(overlay.trailers)
    return(
        <div onClick={() => hideOverlay()} className="overlay">
            <div className="info">
                <div>
                    <h2 className='title'>{selected.title}</h2>
                    <h2 className='rating'>{selected.score === 0 || selected.score === undefined ? 'No current ratings' : selected.score + '/10'}</h2>
                </div>
                <img className='image' src={selected.image_url}></img>
            </div>
            <div className='trailerCarousel'>
                {overlay.trailers.map((trailer,index) => (
                    <a className="trailerlink" href={trailer.video_url} key={index} data-lity>
                        <div className="trailer" >
                            <img src={trailer.image_url}></img>
                            <h3>{trailer.title}</h3>
                        </div>
                    </a>
                ))}
            </div>
            <style jsx>{`
                
                .overlay {
                    position: absolute;
                    top: 0;
                    bottom:0;
                    left: 0;
                    right: 0;
                    z-index: 100;
                    background-color: rgb(0,0,0);
                    background-color: rgb(0,0,0,.9);
                    margin-left: auto;
                    margin-right: auto;
                    display: ${overlay.open === true? "flex" : "none"};
                    flex-direction: column;
                    overflow:scroll;
                }

                .info {
                    width: 80%;
                    text-align:center;
                    margin: 20px auto;
                    border-bottom: 2px solid rgb(71,71,71);
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 22px;
                    min-height: 150px;
                }

                .info div {
                    flex: 0 0 50%;
                }

                .image {
                    height: 150px;
                }

                .title {
                    color: white;
                    margin-bottom: 10px;
                    text-align:left;
                    font-size: 1.1em;
                }

                .rating {
                    color: white;
                    text-align: left;
                    font-size: .7em;
                    margin: 0;
                    font-weight: 200;
                }


                .trailerCarousel {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    padding-bottom: 25px;
                    margin-bottom: 50px;
                }

                .trailerLink {
                    text-decoration: none;
                    width: 100%;
                }

                a:link {
                    text-decoration:none;
                    display: block;
                    margin: 10px 0;
                }
                
                a:visited {
                    text-decoration:none;
                }
                
                a:hover {
                    text-decoration:none;
                }
                
                a:active {
                    text-decoration:none;
                }

                .trailer {
                    
                    text-align: center;
                    width: 80%;

                    margin:0 auto 10px auto;
                    
                }
                .trailer img {

                    box-sizing: border-box;
                    width: 100%;
                    box-shadow: 0 0 0 2px white;
                    transition: box-shadow 1s;
                }
                .trailer img:hover {
                    width: 100%;
                    box-shadow: 0 0 0 10px  white;

                }

                .trailer img:active {
                    width: 100%;
                    box-shadow: 0 0 0 15px black;
                }

                .trailer h3 {
                    color: white;
                    text-align: left;
                    font-size: .7em;
                    text-decoration: none;
                    border: none;
                }

                @media ${device.tablet} {

                    .trailerlink {
                        width: 80%;
                    }

                    .title {
                        font-size: 2.5em;

                    }

                    .rating {
                        font-size: 1.5em;

                    }

                    a:link {
                        margin: 30px auto;
                    }

                    .trailer h3 {
                        font-size: 1.3em;
                    }
                }

                @media ${device.laptop} {

                    .trailerCarousel {
                        margin: 0 auto;
                        width: 80%;
                        justify-content: start;
                    }

                    .trailerlink {
                        width: 50%;
                    }
                    a:link {
                        margin: 60px 0;
                    }

                    .title {
                        font-size: 2.7em;

                    }

                    .rating {
                        font-size: 1.7em;

                    }
                    .trailer h3 {
                        font-size: 1.3em;
                    }

                }
            `}
            </style>
        </div>
    )
}

export default VideosOverlay