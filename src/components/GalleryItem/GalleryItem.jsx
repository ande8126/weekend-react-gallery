import axios from 'axios';
import { useState } from 'react';

function GalleryItem( props ){

//conditional render: make useState variable for description
const [ showDescription, setShowDescription ] = useState( false );
//conditional render: make function to toggle
let toggleDescription = () =>{
    setShowDescription( !showDescription );
    console.log( 'in toggleDescription' );
}//end toggleDescription

//conditional render: make function to show description
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

//likes increment: make function to increase like count by one
let sendLike = () =>{
    let id = props.item.id;
    console.log( 'in sendLike', id );
    //make PUT call
    axios.put( 'gallery/like/' + id ).then( (response)=>{
        console.log( 'back from PUT' );
            //refresh page after PUT call
            props.getGallery();
    }).catch( (err)=>{
        console.log( 'error in PUT', err );
        alert( 'error in PUT', err );
    })
}



    return(
        <>   
        {/* make li show discription onClick */}
            <li className="imgBox" onClick={toggleDescription}>
                {displayDescription()}
            </li>
            <li>
                <button onClick={sendLike}> Like! [{props.item.likes}]</button>
            </li>
        </>
    )
}

export default GalleryItem