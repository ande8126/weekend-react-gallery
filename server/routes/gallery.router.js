const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require( '../modules/pool' );

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    //get data from database (stretch)
    //assign query text to variable
    const queryText = `SELECT * FROM gallery;`;
    //use pool to query db
    pool.query( queryText )
    .then( ( results )=>{
        console.log('in GET route to DB');
        res.send( results.rows );
    })
    .catch( ( error )=>{
        console.log( 'Error in GET route to DB', error);
        res.sendStatus( 500 );
    })

    /////REMOVED FOR STRETCH GOALS res.send(galleryItems);
}); // END GET Route

//POST route to take in new gallery additions (stretch)
router.post( '/', ( req, res )=>{
    console.log( 'in the POST:', req.body );
})




module.exports = router;