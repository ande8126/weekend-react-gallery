const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require( '../modules/pool' );

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    //log to see what I have
    console.log( req.params.id )
    //STRETCH, CONNECTING PUT ROUTE TO DB
    //set id to variable
    const galleryId = req.params.id;
    //set query text to variable
    const queryText = `UPDATE "gallery" SET likes = likes + 1 WHERE "id"=$1;`
    //use pool to query db
    pool.query( queryText, [ galleryId ])
    .then( ( results )=>{
        //send back status OK
        res.sendStatus( 200 );
    }).catch( ( error )=>{
        console.log( 'error in PUT' );
        res.sendStatus( 500 )
    })
////COMMENTED OUT FOR STRETCH GOAL    
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    // res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    //get data from database (stretch)
    //assign query text to variable
    const queryText = `SELECT * FROM gallery ORDER BY "id" DESC;`;
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
    queryText = `INSERT INTO "gallery" ( "path", "description", "likes" ) VALUES ($1, $2, 0);`;
    pool.query( queryText, [ req.body.path, req.body.description ])
    .then( (results )=>{
        res.sendStatus( 200 );
    }).catch( (err)=>{
        console.log( err );
        res.sendStatus( 500 );
    })
})




module.exports = router;