import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Song = ({ lyrics }) => {
  //Prevent loading empty component
  if (lyrics.length === 0) return null

  return (
    <Fragment>
      <h2>Song Lyrics</h2>
      <p className="letra">{lyrics}</p>
    </Fragment>
  )
}

//Documentation
Song.propTypes={
    lyrics: PropTypes.string.isRequired
}


export default Song
