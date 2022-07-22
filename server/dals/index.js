const mongoose = require('mongoose');

const {Schema,model}=mongoose

async function main() {
    await mongoose.connect('mongodb://localhost:27017/best2watch');
}
main().then(res => console.log(res)).catch(err => console.log(err));

const actorsSchema = new Schema({
    "actorsName": String,
    "picture": String,
    "site": String
})
const movieDetailsSchema = new Schema({
    Date: Date,
    actors: [actorsSchema],
    director: String,
    id: String,
    isSeries: Boolean,
    movieName: String,
    picture: String,
    rating: Number,
    series_details: Array,
})

const MovieDetailsModel=model('moiveDetail',movieDetailsSchema);


async function insertDoc() {
return MovieDetailsModel.insertMany([
    {
        "Date": "01/02/22",
        "actors": [
            {
                "actorsName": "shelly",
                "picture": "shelly.png",
                "site": "shelly.com"
            }
        ],
        "director": "father-in- law",
        "id": "319847c5-4cf1-4161-b33c-3754a3e9400e",
        "isSeries": "false",
        "movieName": "shver",
        "picture": "shver.png",
        "rating": "5",
        "series_details": []
    },
    {
        "Date": "01/02/22",
        "actors": [
            {
                "actorsName": "shelly",
                "picture": "shelly.png",
                "site": "shelly.com"
            }
        ],
        "director": "father-in- law",
        "id": "4b0b47ee-f61e-4b35-a012-d1fcc798430b",
        "isSeries": "false",
        "movieName": "shver",
        "picture": "shver.png",
        "rating": "5",
        "series_details": []
    }
])
   
}


async function selectAllMovies(){
    return MovieDetailsModel.find({})
}
/* insertDoc().then(res=>console.log(res)).catch(err=>console.log(err)) */


module.exports = selectAllMovies