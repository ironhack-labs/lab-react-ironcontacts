import React from 'react';

const Card = props => {
  return (
    <tr>
      <td className="col-1"><img className="thumb" src={props.pictureUrl} alt=""/></td>
      <td className="col-1">{props.name}</td>
      <td className="col-1">{props.popularity}</td>
    </tr>
  )
}

export default Card;