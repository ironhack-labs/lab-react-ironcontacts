import React from 'react';


const MovieCard = ({picture, name, popularity, clickToDelete}) => {
  return (
    <tr className="MovieCard">
          <td><img src={picture} alt="actorphoto"/></td>
          <td>{name}</td>
          <td>{popularity}</td>
          <button onClick={clickToDelete}>Delete</button>
    </tr>
  )
}


export default MovieCard;