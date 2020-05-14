import React, {Fragment, useState, useEffect } from 'react';
import Form from './components/Form'
import axios from 'axios'


function App() {
  
  //define state
const [searchlyrics, setSearchLyrics] = useState({})
//State of save Lyrics
const[lyrics, setLyrics] = useState('')

//[Consulting API]
useEffect(() =>{
//prevent consulting empty
if(Object.keys(searchlyrics).length === 0) return;

const {artist, song} = searchlyrics

const consultAPIlyrics= async () =>{
  const url= `https://api.lyrics.ovh/v1/${artist}/${song}`

  const result = await axios(url)

  setLyrics(result.data.lyrics)


}
consultAPIlyrics()
}, [searchlyrics])

  return (
   <Fragment>
     <Form 
     setSearchLyrics={setSearchLyrics}/>
   </Fragment>
  );
}

export default App;
