const express = require("express");
const typedef = require("../typedef/typedefs");
const uuidv4 = require("uuid").v4;
const dal = require("../DAL");

const movieDetailsCtrl = express.Router();

movieDetailsCtrl.post("/", function (req, res) {
  console.log(req.body);
  /**@type {typedef.MovieDetails} */
  const movieDetails = {
    Date: req.body["Date"],
    actors: req.body["actors"],
    director: req.body["director"],
    id: uuidv4(),
    isSeries: req.body["isSeries"],
    movieName: req.body["movieName"],
    picture: req.body["picture"],
    rating: req.body["rating"],
    series_details: req.body["series_details"],
  };
  dal.addMovie(movieDetails);
  res.send(movieDetails);
});

movieDetailsCtrl.put("/:id", function (req, res) {
  if (req.body.actors) res.send('Can"t update actors');
  const isId = dal.updateMovie(req.params.id, req.body);
  if (isId) res.send(req.body);
  else res.status(404).send("Could not find that id");
});
movieDetailsCtrl.post("/:id/actor", function (req, res) {
  const isId = dal.addActors(req.params.id, req.body);
  if (isId) res.send(req.body);
  else
    res
      .status(404)
      .send("Could not find the id or the actor is already present!");
});

movieDetailsCtrl.get("/:id", function (req, res) {
  const movie = dal.readOne(req.params.id);
  if (!movie) res.status(404).send("Could not find that id");
  else res.send(movie);
});

movieDetailsCtrl.get("/", function (req, res) {
  res.send(dal.read());
});

movieDetailsCtrl.delete("/:id", function (req, res) {
    const isId = dal.deleteMovie(req.params.id);
    if (isId) res.sendStatus(200);
    else res.sendStatus(404);
});

movieDetailsCtrl.delete('/:id/:actor', function (req, res) {
    const isId = dal.deleteActor(req.params.id,req.params.actor);
    if (isId) res.sendStatus(200);
    else res.sendStatus(404);
})
module.exports = movieDetailsCtrl;
