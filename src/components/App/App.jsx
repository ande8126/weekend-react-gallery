import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList'
import GalleryForm from '../GalleryForm/GalleryForm'

function App() {

const [ gallery, setGallery ] = useState( [] );

useEffect( ()=>{
  getGallery();
}, [])

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



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryForm 
        gallery = {gallery}
        getGallery = {getGallery}
        />
        <p>Gallery</p>
        {/* <p>{JSON.stringify( gallery )}</p> */}
        <GalleryList 
        gallery = {gallery}
        getGallery = {getGallery}
        />
      </div>
    );
}

export default App;
