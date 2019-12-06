import React, { useContext } from 'react'
import { FilterContext } from '../contexts/FilterContext'

const Filters = () => {
    const { dispatch, filter } = useContext(FilterContext)
    
    const changeFilter = (e) => {
        if(e.target.value === 'Top') {
            dispatch({type:'CHANGE_FILTER', filter: 'top'})
        } else if( e.target.value === 'Upcoming') {
            dispatch({type:'CHANGE_FILTER', filter: 'upcoming'})
        }
    }
       return (
        <div className="filterBar">
            <div className="filtersWrapper">
                <input onClick={(e) => changeFilter(e)} className="upcomingFilter" type="button" value="Upcoming"></input>
                <input onClick={(e) => changeFilter(e)} className="topFilter" type="button" value="Top"></input>
            </div>
            <style>{`
                .filterBar {
                    min-height: 20px;
                }
                .filtersWrapper {
                    position: relative;
                    top: 10px;
                }

                input {
                    position: relative;
                    color: white;
                    font-size: 15px;
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