import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <table className="card">
      <tr>
        <th>
          <img src={props.pictureUrl} alt="" />
        </th>
        <th>{props.name}</th>
        <th>{props.popularity}</th>
        <th>
          <button
            onClick={() => {
              props.deleteCelebrity(props.celebrityIndex);
            }}
          >
            Delete celebrity
          </button>
        </th>
      </tr>
    </table>
  );
};

export default Card;
