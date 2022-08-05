import {GenreBadge, MoviesList} from "../../components";
import './MoviesPage.css';
import React from "react";
import SearchForm from "../../components/searchForm/SearchForm";

const MoviesPage = () => {

    return (
        <div>
            <div>
                <SearchForm/>
            </div>
            <div className={'gender'}>
                <div>
                    <MoviesList/>
                </div>
                <div>
                    <GenreBadge/>
                </div>
            </div>

        </div>
    );
};

export {
    MoviesPage
};