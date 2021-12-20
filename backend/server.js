const config = require("./config");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(config.DB_URL,(error)=>{
    error? console.log('mongoose error:', error): null;
})

const moviesRoutes = require("./routes/movies");
const favoritesRoutes = require("./routes/favorites");



app.use('/movies', moviesRoutes); // Movies Endpoint
app.use('/favorites', favoritesRoutes); // Favorites Endpoint

app.listen(config.PORT, ()=>{
    console.log('server listening on port', config.PORT);
})