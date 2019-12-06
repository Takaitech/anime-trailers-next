import React, {useContext} from 'react'
import {AnimeContext} from '../contexts/AnimeContext'

const Anime = ({anime}) => {
   
    const { selected, dispatch } = useContext(AnimeContext)
    
   return (<div onClick={() => dispatch({type:'SELECT_ANIME',selected: anime}) } className="anime">
        <img src={anime.image_url}></img>
        <style jsx>{`
            .anime {
                max-width: ${selected.mal_id != anime.mal_id ? "75px" : "auto"};
                z-index: 50;
                clip-path: polygon(12% 0, 100% 0, 85% 100%, 0 100%);

            }
            img {
                height: 170px;
                -webkit-filter: ${selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none'}; /* Safari 6.0 - 9.0 */
                filter: ${selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none'};
            }
        `}</style>
    </div>
    )
}


export default Anime