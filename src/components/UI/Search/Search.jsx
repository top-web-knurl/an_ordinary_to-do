import React, { useContext } from "react";
import { SearchContext } from "../../context/Search/SearchContext";

export const Search = () => {

    const { search } = useContext(SearchContext)
    return (
        <>
            <input
                onChange={(e) => search(e)}
                type="search"
                className="form-control form-control-dark"
                placeholder="Поиск по задачам"
            />
        </>
    )
}