import axios from "axios";

const api = axios.create({
    baseURL : "https://www.omdbapi.com/"
})

// axios get method

export const getMovieurl = () => {
    return api.get("?i=tt389619&&apikey=1c12799f&s=titanic&page=1")
}