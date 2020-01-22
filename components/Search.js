import React, {useContext, useRef} from 'react'
import { SearchContext } from '../contexts/SearchContext'
import { device } from '../devices'

const Search = () => {

    const { search, dispatch } = useContext( SearchContext )
    const searchText = useRef('');

    const updateSearchQuery = (e) => {
        e.preventDefault()
        dispatch({type:'UPDATE_QUERY', query: searchText.current.value})
        dispatch({type:'ACTIVATE_SEARCH', active: !search.active})
        searchText.current.blur()
        searchText.current.value = ''
    }

    const unactivateSearch = () => {
        dispatch({type:'ACTIVATE_SEARCH', active: !search.active})
        searchText.current.value = ''


    }

    if(search.active === true) {
        searchText.current.focus()
    }

    return (
        <div className="searchBar">
            <form onSubmit={(e) => updateSearchQuery(e)}>''
                <input type="text" className="searchInput" onClick={(e) => updateSearchQuery(e) } onFocus={() => searchText.current.value = ''} onBlur={() => unactivateSearch()} ref={searchText} ></input>
            </form>
            <style jsx>{`

                .searchBar {
                    min-height: 20px;
                    display:flex;
                    align-items: center;
                    position: absolute;
                    bottom: 49px;
                    left: -16px;
                    width:99%;
                }

                .searchInput {
                    background-color: transparent;
                    border: none;
                    border-bottom: 3px solid white;  
                    margin-bottom: 15px; 
                    margin-right: 10px;
                    color: white;
                    font-size: 1.5em;
                    font-family: campaign, sans-serif;
                    font-weight: 200;
                    font-style: normal;
                    width: 100%;
                    outline: none;
                    -webkit-appearance: none;
                    padding-left: 6%;
                    position:relative;
                    top: 10px;
                    -webkit-appearance: none;
                    border-radius: 0;
                }

                .searchInput:focus {
                    outline: none;
                    border-bottom: 4px solid white;  

                    -webkit-box-shadow: none;
                    box-shadow: none;
                }

                form {
                    align-items: center;
                    width: 100%
                }

                @media ${device.laptop} {
                    .searchInput {
                        border-bottom: 5px solid white;  
                        padding-left: 3.5%;

                    }
                }

            `}
            </style>
        </div>
    )
}

export default Search