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
                <div>
                    <h2 className='title'>{selected.title}</h2>
                    <h2 className='rating'>{selected.score === 0 || selected.score === undefined ? 'No current ratings' : selected.score + '/10'}</h2>
                </div>
                <img className='image' src={selected.image_url}></img>
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
                    margin-right: auto;
                    display: ${hidden === true? "none" : "flex"};
                    flex-direction: column;
                    overflow:scroll;
                }

                .image {
                    height: 150px;
                }

                .info {
                    width: 80%;
                    flex: 0 0 30%;
                    text-align:center;
                    margin: 30px auto;
                    border-bottom: 2px solid rgb(71,71,71);
                    display: flex;
                    justify-content: space-between;
                    
                }

                .title {
                    color: white;
                    margin-bottom: 10px;
                    text-align:left;

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
                    justify-content: center;
                    margin-bottom: 50px;
                }

                .trailerLink {
                    text-decoration: none;
                }

                a:link {
                    text-decoration:none;
                    display: block;
                    margin: 25px 0;
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