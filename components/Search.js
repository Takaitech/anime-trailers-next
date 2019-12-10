import React, {useContext, useRef} from 'react'
import { SearchContext } from '../contexts/SearchContext'

const Search = () => {

    const { dispatch } = useContext( SearchContext )
    const searchText = useRef('');

    const updateSearchQuery = (e) => {
        e.preventDefault()
        dispatch({type:'UPDATE_QUERY', query: searchText.current.value})
    }

    return (
        <div className="searchBar">
            <input className="searchInput" ref={searchText} placeholder="Search"></input>
            <img src="/images/search-icon.png" onClick={(e) => updateSearchQuery(e)} className="submitSearch" type="submit" />
            <style jsx>{`
                .searchBar {
                    min-height: 20px;
                    display:flex;
                    align-items: center;
                }

                .searchInput {
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid white;  
                    margin: 15px; 
                    margin-right: 10px;
                    color: white;
                    font-size: 1em;
                    font-family: campaign, sans-serif;
                    font-weight: 200;
                    font-style: normal;
                    width: 45%;
                }

                .submitSearch {
                    height: 15px;
                    color: white;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    border: none;
                }
            `}
            </style>
        </div>
    )
}

export default Search