const express = require("express");
const typedef = require("../typedef/typedefs");
const uuidv4 = require("uuid").v4;
const dal = require('../DAL');

const movieDetailsCtrl = express.Router();

movieDetailsCtrl.post("/add", function (req, res) {
    /**@type {typedef.MovieDetails} */
    const parsedReq=JSON.parse(req.body)
  const movieDetails = {
    Movie_ID: {
      Date: new Date(parsedReq.body["Date"]),
      actors: parsedReq.body["actors"],
      director: parsedReq.body["director"],
      id: uuidv4(),
      isSeries: parsedReq.body["isSeries"],
      movieName: parsedReq.body["movieName"],
      picture: parsedReq.body["picture"],
      rating: parsedReq.body["rating"],
      series_details: parsedReq.body["series_details"],
    },
  };
    dal.addMovie(movieDetails);
    res.send(movieDetails)
});


module.exports = movieDetailsCtrl;