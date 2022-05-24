import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "./context/fetchContext";
import Movie from "./Movie";
import {v4 as uuidv4}from 'uuid'

function Table(){
  const moviesContext = useContext(MoviesContext);
  const [movies, setMovies] = useState(moviesContext);
  useEffect(() => {
    setMovies(moviesContext);
  }, [moviesContext]);

  console.log( moviesContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Id</th>
          <th>Picture</th>
          <th>Rating</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        {movies
          ? movies.map((m, i) => (
              <Movie key={uuidv4()} data={m} setMovies={setMovies} />
            ))
          : null}
      </tbody>
    </table>
  );
}
export default Table;
