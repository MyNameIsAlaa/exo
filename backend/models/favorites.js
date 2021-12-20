const mongoose = require("mongoose");

const favorites = mongoose.Schema({
    id: {type: String},
    original_title: {type: String},
    overview: {type: String},
    poster_path: {type: String}
})

module.exports = mongoose.model('favorites', favorites);