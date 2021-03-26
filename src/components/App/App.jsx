import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

const [ gallery, setGallery ] = useState( [] );

let getGallery = () =>{
  console.log( 'in getGallery' );
  axios.get( '/gallery' ).then( (response)=>{
    console.log( 'back from GET with response:', response.data);
    setGallery( response.data );
  }).catch( (err)=>{
    console.log( 'error in GET', err );
    alert( 'error in GET', err )
  })
}

getGallery();

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <p>{JSON.stringify( gallery )}</p> */}
        <ul>
          { gallery.map( ( item , index ) => <li key={item.index}> 
          <img src={item.path} /> 
          {item.description}
          {item.likes} 
          </li>)}
        </ul>

      </div>
    );
}

export default App;
