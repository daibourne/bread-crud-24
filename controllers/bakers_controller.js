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

router.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
    .populate('breads')
    .then((baker) => {
        res.send(render('BakerShow', {baker: baker}));
    });
});

// Delete Route 
router.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id).then((deletedBaker) => {
        res.status(303).redirect('/breads');
    });
});

module.exports = router;