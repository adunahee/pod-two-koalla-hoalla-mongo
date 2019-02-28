const express = require('express');
const router = express.Router();
//runs mongodb connection
require('../modules/mongodb');
//schema
const Koala = require('../modules/Koala');



// GET Route
router.get('/', (req, res) => {
    // REPLACE THIS with mongoose find
    Koala.find({}).then((results) => {
        res.send(results);
    }).catch((error) => {
        console.log(`Error in GET: ${error}`);
        res.sendStatus(500);
    });
});

// POST route


// PUT route
router.put('', (req, res) => {
    console.log(req.body);
    Koala.findOneAndUpdate({_id: req.body._id}, req.body)
        .then((updatedKoala) => {
            console.log('updated koala', updatedKoala);
            
            res.sendStatus(200);
        }).catch((e) => {
        console.log('error in put route', e)});
})

// DELETE route


module.exports = router;
