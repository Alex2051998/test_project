import React from 'react';

import css from './headers.module.css'
import {Link} from "react-router-dom";
import {UserInfo} from "../userInfo/UserInfo";
import {useDispatch, useSelector} from "react-redux";

const Headers = () => {
    return (
        <div className={css.header}>
            <h1>Films</h1>
            <Link to={'/'}><h2>Home</h2></Link>
            <UserInfo/>
        </div>
    );
};

export {Headers};