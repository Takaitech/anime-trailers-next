import React, { useState, useEffect, useContext} from 'react'
import { AnimeContext } from '../contexts/AnimeContext'
import { OverlayContext } from '../contexts/OverlayContext'
import ModalVideo from 'react-modal-video'


const VideosOverlay = () => {
    const { selected } = useContext(AnimeContext)
    const { dispatch, hidden } = useContext(OverlayContext)
    const [ trailers, setTrailers] = useState([])

    const [ trailer, setTrailer] = useState()


    
        useEffect(() => {
            if(selected.mal_id !== undefined) {
            fetch("https://api.jikan.moe/v3/anime/" + selected.mal_id + "/videos")
            .then(response => response.json())
            .then(responseJson => setTrailers(responseJson.promo))
            .catch(err =>{
                console.log(err)
            })
            }
        },[selected])


    const hideOverlay = () => {
        dispatch({type:'HIDE_SHOW_OVERLAY', boolean:true})
    }



    return(
        <div onClick={() => hideOverlay()} className="overlay">
            <div className="info">
                <h2 className='title'>{selected.title}</h2>
                <h2 className='rating'>{selected.score + '/10'}</h2>
            </div>
            <div className='trailerCarousel'>
                {trailers.map((trailer,index) => (
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
                    margin-right:auto;
                    display: ${hidden === true? "none" : "flex"};
                    flex-direction: column;
                }

                .info {
                    width: 80%;
                    margin: 0 auto;
                    flex: 0 0 30%;
                }

                .title {
                    color: white;
                    text-align: left;
                    margin-bottom: 10px;
                }

                .rating {
                    color: white;
                    text-align: left;
                    font-size: 16px;
                    margin: 0;
                }


                .trailerCarousel {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                }

                .trailerLink {
                    text-decoration: none
                }

                a:link {
                    text-decoration:none;
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
                    width: 80%;
                    margin:0 auto 10px auto;
                }
                .trailer img {
                    width: 100%;
                }
                .trailer h3 {
                    color: white;
                    text-align: left;
                    font-size: 10px;
                    text-decoration: none;
                    border: none;
                }
            `}
            </style>
        </div>
    )
}

export default VideosOverlay