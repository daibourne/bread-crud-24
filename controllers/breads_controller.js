const express = require('express');
const router = express.Router();
const Bread = require('../models/bread');
const render = require('../render');

// List Route


// New Route
router.get('/', (req, res) => {
    res.send(render('Index', { breads: Bread}));
});

// Detail Route
router.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]){
        res.send(render('Show', { bread: Bread[req.params.arrayIndex], index: req.params.arrayIndex })
        );
    } else {
        res.status(404).send('404. Page not found.');
    }
});

// Delete Route
router.delete('/:arrayIndex', (req, res) => {
    Bread.splice(req.params.arrayIndex, 1);
    res.status(303).redirect('/breads');
});

// Create Route
router.post('/', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true;
    } else {
        req.body.hasGluten = flase;
    }
    Bread.push(req.body);
    res.redirect('.breads');
});

module.exports = router;