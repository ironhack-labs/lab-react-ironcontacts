import React from 'react';
import "./Card.css"

const Card = (props) => {
  return (
    <table className="card">
      <tr>    
        <th><img src={props.pictureUrl} alt="" /></th>
        <th>{props.name}</th>
        <th>{props.popularity}</th>
        <th>{props.id}</th>
      </tr>
    </table>
  );
}

export default Card;