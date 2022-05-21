const express = require('express');
require('dotenv').config()

const movieDetailCtrl=require('./controllers/movieDetails.ctrl')
const app = express();
const PORT = process.env.PORT;

app.use('/', express.static('public'));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/api/movies", movieDetailCtrl);

app.listen(PORT,()=>console.log(`server started at port ${PORT}`))