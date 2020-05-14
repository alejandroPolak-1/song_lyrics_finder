import React from 'react'

const Info = ({ info }) => {
  //Prevent loading empty component. (Object.key because is an Objet)
  if (Object.keys(info).length === 0) return null

  const { strArtistThumb, strGenre, strBiographyEN } = info

  console.log(info)
  return (
    <div className="card border-ligth">
      <div className="card-header bg-primary text-light font-weight-bold">
        Artist information
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Artist Logo" />
        <p className="card-text">Gender: {strGenre}</p>
        <h2 className="card-text">Biography: </h2>
        <p className="card-text">{strBiographyEN}</p>
      </div>
    </div>
  )
}

export default Info
