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
            <form onSubmit={(e) => updateSearchQuery(e)}>
                <input className="searchInput" ref={searchText} placeholder="search"></input>
                <img src="/images/Search-icon.png" onClick={(e) => updateSearchQuery(e)} className="submitSearch" type="submit" />
            </form>
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
                    font-size: .9em;
                    font-family: campaign, sans-serif;
                    font-weight: 200;
                    font-style: normal;
                    width: 45%;
                    outline: none;
                    -webkit-appearance: none;

                }

                form {
                    display:flex;
                    align-items: center;
                }
                
                .searchInput:focus {
                    border-color: inherit;
                    -webkit-box-shadow: none;
                    box-shadow: none;
                }

                .submitSearch {
                    height: 20px;
                    color: white;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    border: none;
                    transition: transform .3s;
                    
                }

                .submitSearch:active  {
                    transform: scale(0.85);
                }
            `}
            </style>
        </div>
    )
}

export default Search