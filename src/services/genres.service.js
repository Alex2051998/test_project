const {axiosService} = require("./axios.service");
const {urls, ApiKey} = require("../constans");

const genreService = {
    getAll:()=>axiosService.get(urls.genre, {'headers': { 'Authorization': ApiKey }}),
    getByGenreId: (id) => axiosService.get(`${urls.genreById}${id}`, {
        params: {
            api_key: `b0770b8b7a50b9bded90ce37b975cf51`,
        }
    })
}

export {
    genreService
};
