import { createContext } from "react";
let movies;


  async function fetchMovies() {
    const res = await fetch('http://localhost:3001/api/movies');
      const jRes = await res.json();
       movies = jRes;
      console.log(movies)
}

fetchMovies()
const MoviesContext = createContext(movies);

export {MoviesContext,movies}