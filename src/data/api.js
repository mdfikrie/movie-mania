import Axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_APIKEY;

export const getMovieList = async () => {
    const movie = await Axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
    return movie.data.results;
}

export const searchMovie = async (q) => {
    const movie = await Axios.get(`${baseUrl}/search/movie?page=1&query=${q}&api_key=${apiKey}`)
    return movie.data.results;
}