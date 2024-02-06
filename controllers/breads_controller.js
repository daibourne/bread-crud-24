const express = require('express');
const router = express.Router();
const Bread = require('../models/bread');
const render = require('../render');

router.get('/', (req, res) => {
    res.send(render('Index', { breads: Bread}));
});

router.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]){
        res.send(render('Show', { bread: Bread[req.params.arrayIndex] }));
    } else {
        res.status(404).send('404. Page not found.');
    }
});

module.exports = router;