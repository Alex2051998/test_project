import React from 'react';
import {useSelector} from "react-redux";
import {IMG} from "../../constans";

const PosterPreview = () => {

    const {poster} = useSelector(state => state.moviReducer);
    return (
        <div>
            <h1>Poster</h1>
            <img src={`${IMG}${poster}`}/>
        </div>
    );
};

export {PosterPreview};