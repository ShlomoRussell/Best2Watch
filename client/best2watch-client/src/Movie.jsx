import React, { useContext } from "react";
import { MoviesContext } from "./context/fetchContext";
import { deleteMovie } from "./crud/fetch";

function Movie({ data, setMovies }) {
  const moviesContext=useContext(MoviesContext)
  return (
    <tr>
      <td>{data["movieName"]}</td>
      <td>{data["id"]}</td>
      <td>
        <img src={data["picture"]} alt={`picture of ${data["movieName"]}`} />
      </td>
      <td>{data["rating"]}</td>
      <td>{data["Date"]}</td>
      <td>
        <button
          onClick={(e) => deleteMovie(data["id"], setMovies, moviesContext)}
        >
          Delete Movie
        </button>
      </td>
      <td>
        <button>Edit Movie Details</button>
      </td>
      <td>
        <button>Add Actors</button>
      </td>
      <td>
        <button> View Actors</button>
      </td>
    </tr>
  );
}

export default Movie;
