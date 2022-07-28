
import React, { useState } from 'react';
import { SearchContext } from './SearchContext';

export const SearchState = ({ children }) => {

    const [searchTasks, setSearchTasks] = useState('')

    const search = (e) => {
        setSearchTasks(e.target.value.trim())
    }

    return (
        <SearchContext.Provider
            value={{
                searchTasks, search,
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}