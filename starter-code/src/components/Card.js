import React from 'react';
import "./Card.css"

const Card = (props) => {
  return (
    <table className="card">
      <tr>    
        <th><img src={props.pictureUrl} alt="" /></th>
        <th><h2>{props.name}</h2></th>
        <th><h2>{props.popularity}</h2></th>
        <th><p>{props.id}</p></th>
      </tr>
    </table>
  );
}

export default Card;