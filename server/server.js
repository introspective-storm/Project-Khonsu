import express from 'express';
import api from './api.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', api); //mounting api router

app.get('/', (req, res) => {
    res.send("Hello World!")
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});