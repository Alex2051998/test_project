import {useSelector} from "react-redux";

const {axiosService} = require("./axios.service");
const {urls, ApiKey} = require("../constans");


const moviService = {
    getAll: (page = 1) => axiosService.get(urls.movies, {
        params: {
            page,
            api_key: `b0770b8b7a50b9bded90ce37b975cf51`,
        }
    }),
    getByMoviId: (id) => axiosService.get(`${urls.moviesById}/${id}`, {
        params: {
            id,
            api_key: `b0770b8b7a50b9bded90ce37b975cf51`,
        }
    }),
    searchMovi: (moviName) => axiosService.get(`${urls.searchMovi}${moviName}`, {
        params: {
            api_key: `b0770b8b7a50b9bded90ce37b975cf51`,
        }
    })
}

export {
    moviService
};
// {'headers': {'Authorization': ApiKey}}