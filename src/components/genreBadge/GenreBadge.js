import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import './GenreBadge.css';
import {moviAction} from "../../redax";



const GenreBadge = () => {
    const {genres} = useSelector(state => state.moviReducer);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Genders</h1>
            {genres.map(genre => <button onClick={() => {dispatch(moviAction.getByIdGenre(genre.id))}} className={'genreButton'}><div key={genre.id}>{genre.name}</div></button>)}
        </div>
    );
};

export {GenreBadge};