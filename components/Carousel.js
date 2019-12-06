import React, { useState, useContext, useEffect} from 'react'
import { FilterContext } from '../contexts/FilterContext'
import { SearchContext } from '../contexts/SearchContext'
import { AnimeContext } from '../contexts/AnimeContext'
import Anime from './Anime'



const Carousel = ({topAnime}) => {

    const [anime, setAnime] = useState(topAnime)
    const {filter} = useContext(FilterContext)
    const {query} = useContext(SearchContext)
    const {selected, dispatch} = useContext(AnimeContext)
    


    useEffect(() => {
        const url = filter === 'top' ? 'https://api.jikan.moe/v3/top/anime/1/bypopularity' : 'https://api.jikan.moe/v3/top/anime/1/upcoming'
        fetch(url)
        .then(response => response.json())
        .then(responseJson => setAnime(responseJson.top))
        .catch(err => console.log(err) )
    },[filter])
    

    useEffect(() => { 
        if(query !== '') {
            function formatQueryParams(params) {
                const queryItems = Object.keys(params)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
                return queryItems.join('&');
            }
            
            const baseurl = 'https://api.jikan.moe/v3/search/anime';
            let params = {
                q: query,
                page: 1,
                type: 'tv',
                limit: 10,
            };
            
            let url = baseurl + '?' + formatQueryParams(params);
            fetch(url)
            .then(response => response.json())
            .then(responseJson => setAnime(responseJson.results))
            .catch(err => console.log(err) )

        }
    },[query])

    useEffect(() => {
        dispatch({type:'SELECT_ANIME', selected: {}})
    },[anime])


    return (
        <div className="carousel">
            {anime.map((anime,index) => (
                <Anime key={index} anime={anime} />
            ))}
            <style jsx>{`
            .carousel {
                display: flex;
                min-height: 175px;
                width: 100%;
                overflow: scroll;
            }

            `}</style>
        </div>
    )
}

export default Carousel
