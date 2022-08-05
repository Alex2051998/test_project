import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {IMG} from "../../constans";
import './MoviInfo.css';
import {Link, useSearchParams} from "react-router-dom";
import {moviAction} from "../../redax";

const MovieInfo = () => {

    const {movi, moviId, searchMovi} = useSelector(state => state.moviReducer);
    const {original_title, overview, popularity, poster_path, release_date, vote_average} = movi;
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams();



    useEffect(()=>{
        // dispatch(moviAction.getByIdMovi(moviId))
        if(moviId){
            setQuery({moviId:`${moviId}`})
            dispatch(moviAction.getByIdMovi({moviId:query.get('moviId')}))

        }else {
            dispatch(moviAction.getByIdMovi({moviId:query.get('moviId')}))
        }

    },[query])


    return (
        <div>
            <h1>MoviInfo</h1>
            <div className={'block'}>
                <div>
                    <Link onClick={() => dispatch(moviAction.getPoster(poster_path))} to={'/poster'}><img className={'moviInfoImg'} src={`${IMG}${poster_path}`}/></Link>
                </div>
                <div className={'moviInfoDetails'}>
                    <h1>Назва:{original_title}</h1>
                    <p>Дата виходу: {release_date}</p>
                    <h2>Рейтинг: {vote_average}</h2>
                    <h2>Опис</h2>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    );
};

export
{
    MovieInfo
};