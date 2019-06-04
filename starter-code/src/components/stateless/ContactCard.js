import React from 'react'

const Card = ({ name, pictureUrl, popularity }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={pictureUrl} alt="artist image"></img>
      <p>{popularity}</p>

    </div>
  )
}

export default Card


