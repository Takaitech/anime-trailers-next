import React, { useContext } from 'react'
import { FilterContext } from '../contexts/FilterContext'
import { device } from '../devices'

const Filters = () => {
    const { dispatch, filter } = useContext(FilterContext)
    const changeFilter = (e) => {
        if(e.target.getAttribute('data-filter') === 'Top') {
            dispatch({type:'CHANGE_FILTER', filter: 'top'})
        } else if( e.target.getAttribute('data-filter') === 'Upcoming') {
            dispatch({type:'CHANGE_FILTER', filter: 'upcoming'})
        } else if( e.target.getAttribute('data-filter') === 'Movies') {
            dispatch({type:'CHANGE_FILTER', filter: 'movie'})
        }
        
    }   
       return (
        <div className="filters">
            <div className="filtersWrapper">
                <span onClick={(e) => changeFilter(e)} className="topFilter" data-filter="Top">Top</span>
                <span onClick={(e) => changeFilter(e)} className="moviesFilter" data-filter="Movies">Movies</span>
                <span onClick={(e) => changeFilter(e)} className="upcomingFilter" data-filter="Upcoming">Upcoming</span>
               
            </div>
            <style jsx>{`  
                .filters{
                    box-sizing: border-box;
                    background-color: #212121;
                    flex: 0 0 20%; 
                    display: flex;
                    align-items: center;
                }

                .filtersWrapper {
                    height: 75%;
                    position: relative;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width: 100%;
                }

               span {
                    position: relative;
                    color: white;
                    font-size: 1em;
                    z-index: 1;
                }

                .topFilter {
                    display: block;
                    color:${filter === 'top' || filter === 'init' ? "white" : "#5F5F5F"};                 
                    transform: scale(1);
                    transition: transform 1s;
                    position: relative;
                    left: 4%;
                }
                
                .upcomingFilter {
                    display: block;
                    transform: scale(1);
                    transition: transform 1s;
                    color: ${filter === 'upcoming' ? "white" : "#5F5F5F"};
                }
                  
                .moviesFilter {
                    display: block;
                    transform: scale(1);
                    transition: transform 1s;
                    color: ${filter === 'movie' ? "white" : "#5F5F5F"};
                    position: relative;
                    left: 2%;
                }

                .upcomingFilter:hover, .topFilter:hover, .moviesFilter:hover {
                    transform: scale(1.1);
                }

                @media ${device.laptop}{
                    .filters{
                        clip-path: polygon(4% 0, 100% 0%, 96% 100%, 0% 100%);
                        flex: 0 0 25%;
                    }

                    .filtersWrapper {
                        margin-left: 13%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: flex-start;

                        
                    }
    
                   span {
                       display: block;
                        color: white;
                        font-size: 1.7em;
                        z-index: 1;
                    }
    
                }

                @media ${device.desktop} {
                    span {
                        font-size: 3.5em;
                    }
                }
            `}
            </style>
        </div>
    )
}

export default Filters