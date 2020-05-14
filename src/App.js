import React, { Fragment, useState, useEffect } from 'react'
import Form from './components/Form'
import Song from './components/Song'
import Info from './components/Info'
import axios from 'axios'

function App() {
  //define state
  const [searchlyrics, setSearchLyrics] = useState({})
  //State of save Lyrics
  const [lyrics, setLyrics] = useState('')
  //State of save information of theaudiodb API
  const [info, setInfo] = useState({})

  //[Consulting API]
  useEffect(() => {
    //prevent consulting empty
    if (Object.keys(searchlyrics).length === 0) return

    const { artist, song } = searchlyrics

    const consultAPIlyrics = async () => {
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`

      const [lyrics, information] = await Promise.all([axios(url), axios(url2)])
      setLyrics(lyrics.data.lyrics)
      setInfo(information.data.artists[0])

      // console.log(lyrics.data.lyrics)
      // console.log(information.data.artists[0].strArtistThumb)

      // setLyrics(result.data.lyrics)
    }
    consultAPIlyrics()
  }, [searchlyrics, info])

  return (
    <Fragment>
      <Form setSearchLyrics={setSearchLyrics} />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Info info={info}/>
          </div>
          <div className="col-md-6">
            <Song lyrics={lyrics} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
