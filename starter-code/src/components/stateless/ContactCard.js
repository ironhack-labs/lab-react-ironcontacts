import React from 'react'

const Card = props => {
  return (

    <tr className="card">
      <td><img src={props.pictureUrl} alt="artist image"></img></td>


      <td><h2>{props.name}</h2></td>

      <td><p>{props.popularity}</p></td>

      <td> <button onClick={props.removeContactFromState}>Eliminar</button></td>
    </tr>

  )
}

export default Card


