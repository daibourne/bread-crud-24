const express = require('express');
const router = express.Router();
const Bread = require('../models/bread');
const render = require('../render');
// const bread = require('../models/bread');

// List Route
router.get('/', (req, res) => {
    // res.send(render('Index', { breads: Bread }));
    Bread.find().then((breads) => {
        res.send(render('Index', { breads: breads }));
    })
});

// New Route
router.get('/new', (req, res) => {
    res.send(render('New'));
});

// router.get('/', (req, res) => {
//     res.send(render('Index', { breads: Bread}));
// });

// Detail Route
router.get('/:id', (req, res) => {
    Bread.findById(req.params.id).then((bread) => {
        res.send(render('Show' ,{ bread: bread }));
    }).catch((err) => {
        console.log(err)
    })
});

// router.get('/:arrayIndex', (req, res) => {
//     if (Bread[req.params.arrayIndex]){
//         res.send(render('Show', { bread: Bread[req.params.arrayIndex], index: req.params.arrayIndex })
//         );
//     } else {
//         res.status(404).send('404. Page not found.');
//     }
// });

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
    Bread.create(req.body);
    res.redirect('/breads');
});

// UPDATE
router.put('/:arrayIndex' , (req, res) => {
    if(req.body.hasGluten === 'on'){
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread[req.params.arrayIndex] = req.bodyres.redirect(`/breads/${req.params.arrayIndex}`)
});

// EDIT
router.get('/:indexArray/edit', (req, res) => {
    res.render('edit', {
      bread: Bread[req.params.indexArray],
      index: req.params.indexArray
    })
});


module.exports = router;