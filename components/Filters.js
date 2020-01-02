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
        }
    }   
       return (
        <div className="filters">
            <div className="filtersWrapper">
                <span onClick={(e) => changeFilter(e)} className="upcomingFilter" data-filter="Upcoming">Upcoming</span>
                <span onClick={(e) => changeFilter(e)} className="topFilter" data-filter="Top">Top</span>
            </div>
            <style jsx>{`  
                .filters{
                    box-sizing: border-box;
                    background-color: #212121;
                    flex: 0 0 20%; 
                }
                .filtersWrapper {
                    height: 100%;
                    position: relative;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
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
                }
                .upcomingFilter {
                    display: block;
                    transform: scale(1);
                    transition: transform 1s;
                    color: ${filter === 'upcoming' ? "white" : "#5F5F5F"};
                }

                .upcomingFilter:hover, .topFilter:hover {
                    transform: scale(1.1);
                }

                @media ${device.laptop}{
                    .filters{
                        clip-path: polygon(4% 0, 100% 0%, 96% 100%, 0% 100%);
                        flex: 0 0 30%;
                    }

                    .filtersWrapper {
                        margin-left: 13%;
                        display: block;
                        padding-top: 30px;
                    }
    
                   span {
                        position: relative;
                        color: white;
                        font-size: 2em;
                        z-index: 1;
                    }
    
                }
            `}
            </style>
        </div>
    )
}

export default Filters