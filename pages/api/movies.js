import {movies} from "../../helper/movieData.js"
export default function handler(req, res) {
    res.status(200).json(movies)
}