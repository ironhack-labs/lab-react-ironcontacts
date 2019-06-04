import React from 'react'

const Card = ({ pictureUrl, name, popularity }) => {
  return (

    <tr>
      <td><img src={pictureUrl} alt="artist image"></img></td>


      <td><h2>{name}</h2></td>

      <td><p>{popularity}</p></td>
    </tr>

  )
}

export default Card


