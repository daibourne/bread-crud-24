const express = require('express');
const router = express.Router();
const Bread = require('../models/bread');
const render = require('../render');

router.get('/', (req, res) => {
    res.send(render('Index', { breads: Bread}));
});

router.get('/:arrayIndex', (req, res) => {
    res.send(render('Show', { bread: Bread[req.params.arrayIndex] }));
});

module.exports = router;