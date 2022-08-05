import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

import {genreService, moviService} from "../../services";

const initialState = {
    movies: [],
    movi: [],
    moviId: null,
    genres: [],
    genresByMovi: null,
    poster: null,
    page: null,
    endPage: null,
    searchMovi:[]

};

const getAll = createAsyncThunk(
    'moviSlice/getAll',
    async ({page}) => {
        const {data} = await moviService.getAll(page);
        return data;
    }
);

const getByIdMovi = createAsyncThunk(
    'moviSlice/getByIdMovi',
    async ({moviId}) => {
        const {data} = await moviService.getByMoviId(moviId);
        return data;
    }
);

const getAllGenres = createAsyncThunk(
    'moviSlice/getAllGenres',
    async () => {
        const {data} = await genreService.getAll();
        return data;
    }
);

const getByIdGenre = createAsyncThunk(
    'moviSlice/getByIdGenre',
    async (id) => {
        const {data} = await genreService.getByGenreId(id);
        return data;
    }
);

const searchMovi = createAsyncThunk(
    'moviSlice/searchMovi',
    async (moviName) => {
        const {data} = await moviService.searchMovi(moviName);
        return data;
    }
);

const moviSlice = createSlice({
    name: 'moviSlice',
    initialState,
    reducers: {
        moviActionsInfo: (state, action) => {
            state.moviId = action.payload;
            console.log(JSON.stringify(state.moviId))
        },
        getPoster: (state, action) => {
            state.poster = action.payload;
        }

    },
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.endPage = action.payload.total_page;
            })
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            })
            .addCase(getByIdMovi.fulfilled, (state, action) => {
                state.movi = action.payload;
                console.log(JSON.stringify(state.movi))
            })
            .addCase(getByIdGenre.fulfilled, (state, action) => {
                state.movies = action.payload.results;
            })
            .addCase(searchMovi.fulfilled, (state, action) => {
                state.searchMovi = action.payload.results;
            })

});

const {reducer: moviReducer, actions: {moviActionsInfo, getPoster}} = moviSlice;

const moviAction = {
    getAll,
    moviActionsInfo,
    getAllGenres,
    getPoster,
    getByIdMovi,
    getByIdGenre,
    searchMovi
};

export {
    moviReducer,
    moviAction
};