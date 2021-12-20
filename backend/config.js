require('dotenv').config();

const config = {
    API_KEY: process.env.API_KEY || "bebc42eb13856d31c8660cc9d2819f31",
    API_URL: process.env.API_URL || "https://api.themoviedb.org/3/",
    DB_URL: process.env.DB_URL || "mongodb://localhost:27017/movieapp",
    PORT: process.env.PORT || 8080
}

module.exports = config;