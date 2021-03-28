//bring in axios to make POST call to server
import axios from 'axios';
import { useState } from 'react';

//props in the variables

function GalleryForm( props ){


    // need temp variables to hold photo url and description
    let [ tempPhoto, setTempPhoto ] = useState( '' );
    let [ tempDescription, setTempDescription ] = useState( '' );

    //functions to set photo url and description
    let handlePhoto = ( event ) =>{
        //set photo url to tempPhoto
        //JUST TESTING: console.log( 'handlePhoto:', event.target.value );
        setTempPhoto( event.target.value );
    }
    let handleDescription = ( event ) =>{
        //set description text to tempDescription
        //JUST TESTING: console.log( 'handleDescription:', event.target.value )
        setTempDescription( event.target.value );
    }
    // need function to run onClick and add gallery entry
    let addToGallery = () =>{
        console.log( 'in addToGallery');
        // need object to send 
        const newGalleryObject = {
            path: tempPhoto,
            description: tempDescription
        }
        // need axios POST call to send input to server
        axios.post( '/gallery', newGalleryObject ).then( ( response )=>{
            console.log( 'back from POST with:', response );
            //update gallery
            props.getGallery();
        }).catch( ( err )=>{
            console.log( 'error in POST', err );
            alert( err );
        })
        
    }


    return(
        <section className="form">
            {/* input needed for img link */}
            <label>Photo:</label>
            <input onChange={ handlePhoto } type="text" placeholder="http://photourl.com/example"></input>
            {/* input needed for description */}
            <label>Description:</label>
            <input onChange={ handleDescription } type="text" placeholder="Short description here"></input>
            {/* button needed to submit */}
            <button onClick={ addToGallery }>Add</button>
        </section>
    )

}
//export
export default GalleryForm;

