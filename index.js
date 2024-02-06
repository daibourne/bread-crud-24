const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;
console.log(PORT);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello bread. Welcome to an Aweosme App');
});

app.use('/breads', require('./controllers/breads_controller'));

app.get('*', (req, res) => {
res.status(404).send('404. Page not found.');
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});