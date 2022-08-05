const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    movies: '/discover/movie?page=',
    moviesById:'/movie',
    genre: '/genre/movie/list',
    genreById:'/discover/movie?with_genres=',
    searchMovi:'/search/keyword?query='
}

const IMG = 'https://image.tmdb.org/t/p/w500';

const ApiKey = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJlN2Q1M2M3MTQ3OTFmZjczZmU4NzA3ODdmMDgxNSIsInN1YiI6IjU3ZWE0NjY0OTI1MTQxMTA4OTAwOGZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEEivZliSc_G_UGJbP8p1LRlPXWu3U9erTCsUnRWP_U';

export default baseURL;
export {
    urls,
    ApiKey,
    IMG
}