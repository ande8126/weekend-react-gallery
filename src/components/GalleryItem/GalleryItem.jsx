import axios from 'axios';
import { useState } from 'react';

function GalleryItem( props ){

//making a conditional render
//make useState variable for description
const [ showDescription, setShowDescription ] = useState( false );
//make function to toggle
let toggleDescription = () =>{
    setShowDescription( !showDescription );
    console.log( 'in toggleDescription' );
}//end toggleDescription

//make function to show description
let displayDescription = () =>{
    let returnString = '';
    if ( showDescription ){
        returnString = props.item.description
    } 
    else{
        returnString = <img src={props.item.path} />
    }
    return returnString;
}//end displayDescription


//make funciton to increase like count by one
let sendLike = () =>{
    console.log( 'in sendLike' );
    axios.put( 'gallery/like/:id' ).then( (response)=>{
        console.log( 'back from PUT' );
    }).catch( (err)=>{
        console.log( 'error in PUT', err );
        alert( 'error in PUT', err );
    })
}
//make PUT route


    return(
        <>   
        {/* make li show discription onClick */}
            <li onClick={toggleDescription}> 
            {displayDescription()}
            </li>
            <button onClick={sendLike}> Like! [{props.item.likes}]</button>
        </>
    )
}

export default GalleryItem