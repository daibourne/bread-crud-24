const express = require('express');
const methodOverride = require('method-override');
const app = express();
const mongoose = require('mongoose');

// CONFIG
require('dotenv').config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
console.log(PORT);

// Database Connection
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to mongo: ' + MONGO_URI);
    })
    .catch((err) => {
        console.log('Error connecting to mongo: ' + err);
    });


// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello bread. Welcome to an Aweosme App');
});

// BREADS ROUTES
app.use('/breads', require('./controllers/breads_controller'));

// 404 PAGE
app.get('*', (req, res) => {
res.status(404).send('404. Page not found.');
});

// LISTEN
app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});