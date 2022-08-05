import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {moviAction} from "../../redax";

const SearchForm = () => {
    const {register, reset, handleSubmit} = useForm();
    let dispatch = useDispatch();


    const submit = async (data) => {
        await dispatch(moviAction.searchMovi(data.searchMovi));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder={'searchMovi'} {...register('searchMovi')} />
            <button>Search</button>
        </form>
    );
};

export default SearchForm;