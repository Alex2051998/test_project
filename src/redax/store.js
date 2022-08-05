import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviReducer} from "./slices";


const rootReducer = combineReducers({
    moviReducer
});

const setupStore = () => configureStore({
    reducer:rootReducer,
});

export {
    setupStore
};