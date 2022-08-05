import React, {useEffect} from 'react';
import {IMG} from "../../constans";
import './MoviesListCard.css';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {moviAction} from "../../redax";
import {moviService} from "../../services";

const MoviesListCard = ({movi}) => {
    const {original_title, backdrop_path, release_date, vote_average, id} = movi;

    const dispatch = useDispatch();



    return (
        <div>
            <div className={'blockIMG'}>
                <Link to={'/movi'} onClick={() => dispatch(moviAction.moviActionsInfo(id))}><img className={'img'} src={`${IMG}${backdrop_path}`}/></Link>
                <p className={'text'}>Рейтинг: {vote_average}</p>
                <Link to={'/movi'} onClick={() => dispatch(moviAction.moviActionsInfo(id))}><h2 className={'text'}>Назва: {original_title}</h2></Link>
                <h5 className={'text'}>Дата премєри: {release_date}</h5>
            </div>

        </div>
    );
};

export {MoviesListCard};