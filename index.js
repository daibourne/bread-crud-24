const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;
console.log(PORT);

app.get('/', (req, res) => {
    res.send('Hello bread. Welcome to an Aweosme App');
});

app.use('/breads', require('./controllers/breads_controller'))

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});