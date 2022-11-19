const axios = require('axios');

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const KEY = "025e6ba837c180b1375a1753437eaffc"

export const getTrendingFilms = async () => {
 const respons = await axios.get(`/trending/movie/day?api_key=${KEY}`)
 return respons.data.results;
}

export const getSearchFilms = async query => {
    const respons = await axios.get(`search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
    return respons.data.results;
}

export const getMovieDetailsById = async id => {
    const respons = await axios.get(`movie/${id}?api_key=${KEY}&language=en-US`)
    return respons.data.results;
}

export const getMovieCredits = async id => {
    const respons = await axios.get(`movie/${id}/credits?api_key=${KEY}&language=en-US`)
    return respons.data.results;
}

export const getMovieReviews = async id => {
    const respons = await axios.get(`movie/${id}/reviews?api_key=${KEY}&language=en-US`)
    return respons.data.results;
}
