import express from 'express';
import api from './api.js';
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigins = ['http://localhost:5173']; // Replace with your React app's origin

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

app.use('/api', api); //mounting api router

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

app.get('/', (req, res) => {
    res.send("Hello World!")
});

app.listen(PORT, () => {
    let selector = getRandomInt(1,6);
    switch (selector) {
        case 1:
            console.log("Easy Come, Easy Go");
            break;
        case 2:
            console.log("You're Gonna Carry That Weight");
            break;
        case 3:
            console.log("Life Is But A Dream");
            break;
        case 4:
            console.log("See You Space Samurai");
            break;
        case 5:
            console.log("See You Cowgirl, Someday, Somewhere!");
            break;
        case 6:
            console.log("See You Space Cowboy");
            break;
    }
    console.log(`server running on port ${PORT}`)
});