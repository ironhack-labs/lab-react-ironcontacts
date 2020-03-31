import React from 'react'


const ArtistId = (props) => {
  return (
    <tr>
    <td><img className = "imgContact" src={props.pictureUrl} alt=""/></td>
    <td> <p><b>{props.name}</b>  </p></td>
    <td> <p><b>{props.popularity.toFixed(2)}</b>  </p></td>
    <button onClick={props.delete}>Delete</button>
    </tr>
    )
}

export default ArtistId
