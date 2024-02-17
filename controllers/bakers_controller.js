const express = require('express');
const router = express.Router();
const Baker = require('../models/baker');
const render = require('../render');

router.get('/', (req, res) => {
    Baker.find().populate('breads')
    .then((bakers) => {
        res.send(bakers);
    });
});

module.exports = router;