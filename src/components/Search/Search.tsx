import React, { useContext, useState } from 'react'
import './Search.css'
import TmdbContext from '../../context/tmdb/TmdbContext'




function Search() {

    const {
        searchResults,
        searchByQuery,
        clearResults
    } = React.useContext(TmdbContext)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const query: string = e.target.value.trim()
        if (query.length > 1) {
            searchByQuery(query)
        } else {
            clearResults()
        }
    }

    return (
        <div className='search-container'>
            <input type="search" onChange={handleChange} />
            <div className='results'>
                <ul>
                    {
                        searchResults.map((element) => (
                            <li key={element.id}>
                                <p>{element.name}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default Search
