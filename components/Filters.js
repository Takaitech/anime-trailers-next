import React, { useContext } from 'react'
import { FilterContext } from '../contexts/FilterContext'

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
        <div className="filterBar">
            <div className="filtersWrapper">
                <span onClick={(e) => changeFilter(e)} className="upcomingFilter" data-filter="Upcoming">Upcoming</span>
                <span onClick={(e) => changeFilter(e)} className="topFilter" data-filter="Top">Top</span>
            </div>
            <style>{`  
                .filterBar {
                    min-height: 20px;
                }
                .filtersWrapper {
                    position: relative;
                    top: 10px;
                    margin-left: 15px;
                }

               span {
                    position: relative;
                    color: white;
                    font-size: 1.5em;
                    z-index: 1;
                }

                .topFilter {
                    display: block;
                    margin-top: 10px;
                    color: ${filter === 'top' ? "white" : "#5F5F5F"}

                }
                .upcomingFilter {
                    color: ${filter === 'upcoming' ? "white" : "#5F5F5F"}
                }

            `}
            </style>
        </div>
    )
}

export default Filters