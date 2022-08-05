import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";
import {moviAction} from "../../redax";

import {MoviesListCard} from "../moviesListCard/MoviesListCard";
import './MoviList.css';


const MoviesList = () => {

    const dispatch = useDispatch();

    const {movies, page, endPage, searchMovi} = useSelector(state => state.moviReducer);

    const [query, setQuery] = useSearchParams({page: '1'});


    useEffect(() => {
        dispatch(moviAction.getAll({page: query.get('page')}))
        dispatch(moviAction.getAllGenres())
    }, [query])

    const prevPage = () => {
        const prevPage = +query.get('page') - 1;
        setQuery({page: `${prevPage}`})
    }

    const nextPage = () => {
        const nextPage = +query.get('page') + 1;
        setQuery({page: `${nextPage}`})
    }


    return (
        <div>

            <div className={'block'}>
                <div>
                    {searchMovi.map(moviSearch => <div className={'moviSerch'} key={moviSearch.id}><Link to={'/movi'}
                                                                                                         onClick={() => dispatch(moviAction.moviActionsInfo(moviSearch.id))}>{moviSearch.name}</Link>
                    </div>)}
                </div>


                {movies.map(movi => <MoviesListCard key={movi.id} movi={movi}/>)}
            </div>
            <div>
                <button disabled={page == 1} onClick={prevPage}>prev page</button>
                <button disabled={page >= endPage} onClick={nextPage}>next page</button>
            </div>
        </div>

    )
        ;
};

export {MoviesList};