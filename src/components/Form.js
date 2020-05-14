import React, {useState} from 'react'

const Form = () => {

//state of form (name equal of "name input")
const [search, setSearch] = useState({
    artist: '',
    song: ''
})
const [error, setError] = useState(false)

//extract artist and song for to put in value of input
const {artist, song} = search

//UPDATE STATE. function to each "input" to read its content
const handleChange = (e) =>{
        setSearch({
        ...search,
        [e.target.name] : e.target.value
    })
}

//SEARCH INFO, consult API
const handleSubmit = e => {
    e.preventDefault()

    //validate
    if(artist.trim() === '' || song.trim()=== '') {
        setError(true)
        return
    }
    setError(false)
    
    //pass to principal component
    
}

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form 
                onSubmit = {handleSubmit}
                className="col card text-white bg-transparent mb-5 pt-4 pb-2"
          >
            <fieldset>
              <legend className="text-center">Song Lyrics Finder</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artist</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Artist Name"
                      onChange={handleChange}
                      value={artist}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Songs</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Song Name"
                      onChange={handleChange}
                      value={song}
                    />
                  </div>
                </div>
              </div>

              <button 
              type="submit"
              className="btn btn-primary float-right">Search</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
