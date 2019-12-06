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
                <button type="submit"></button>
            </form>
            <style jsx>{`
                .searchBar {
                    min-height: 20px;
                }

                .searchInput {
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid white;  
                    margin: 15px; 
                    color: white;
                }
            `}
            </style>
        </div>
    )
}

export default Search