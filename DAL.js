const { json } = require("body-parser");
const fs = require("fs");

function read() {
  return JSON.parse(fs.readFileSync(`./data/movies.json`, "utf-8"));
}
const readOne = (id) => read().find((m) => m.id == id);

const write = (content) =>
  fs.writeFileSync("./data/movies.json", JSON.stringify(content));

function addMovie(Movie_ID) {
  const movies = read();
  movies.push(Movie_ID);
  write(movies);
  return true;
}
const findIndex = (id) => {
  const movies = read();
  const index = movies.findIndex((m) => id == m.id);
  if (index == -1) return false;
  return index;
};
function updateMovie(id, updatedDetails) {
  const movies = read();
  const movieIndex = findIndex(id);
  if (movieIndex === false) return false;
  movies[movieIndex] = { ...movies[movieIndex], ...updatedDetails };
  write(movies);
  return true;
}

function addActors(id, addedActor) {
  const movies = read();
  const movieIndex = findIndex(id);
  if (movieIndex === false) return movieIndex;
  let actors = movies[movieIndex]["actors"];
  if (actors.find((a) => a.actorsName === addedActor.actorsName)) return false;
  actors.push(addedActor);
  write(movies);
  return true;
}

function deleteMovie(id) {
  const movies = read();
  const index = findIndex(id);
  if (index === false) return false;
  movies.splice(index, 1);
  write(movies);
}

function deleteActor(id, actor) {
  const movies = read();
  const index = findIndex(id);
  if (index === false) return index;
  const actorsIndex = movies[index].actors.findIndex(
    (a) => a["actorsName"] === actor
  );
  if (actorsIndex !== -1) {
    movies[index].actors.splice(actorsIndex, 1);
    write(movies);
    }
    else return false
}

module.exports = {
  read,
  readOne,
  addMovie,
  updateMovie,
  addActors,
  deleteMovie,
  deleteActor,
};
