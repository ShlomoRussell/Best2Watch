

export function deleteMovie(id, setMovies,data) {
  fetch(`http://localhost:3001/api/movies/${id}`, {
    method: "DELETE",
  }).then((res) => {
      if(res.status==200)setMovies([...Array.from(data.filter(m => m.id != id))])
});
}