const fs = require('fs');

function read() {
    return JSON.parse(fs.readFileSync(`./data/movies.json`,'utf-8'))
}

function addMovie(Movie_ID) {
    const movies = read();
    movies.push(Movie_ID);
    fs.writeFileSync('./data/movies.json', JSON.stringify(movies))
    return true
}

module.exports = {
    read,
    addMovie
}