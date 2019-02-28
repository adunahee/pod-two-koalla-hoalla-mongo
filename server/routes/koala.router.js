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
    }).then((error) => {
        console.log(`Error in GET: ${error}`);
        res.sendStatus(500);
    });

    // res.send([
    //     {
    //         _id: ObjectId("58de9673d0c1cb22fbcb2655"),
    //         name: "Scotty",
    //         gender: "M",
    //         age: 4,
    //         ready_to_transfer: true,
    //         notes: "Born in Guatemala"
    //     }
    // ])
});

// POST route
router.post('/', (req, res) => {
    const newKoala = req.body;
    Koala.create(newKoala).then((response) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`error in posting koala: ${error}`);
        res.sendStatus(500);
    })
})

// PUT route


// DELETE route


module.exports = router;
