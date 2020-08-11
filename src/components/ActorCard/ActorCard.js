import React from 'react';
import './ActorCard.css';

const ActorCard = (props) => {
  const { name, pictureUrl, popularity } = props;

  return (
    <>
      <td>
        <img className="actor-picture" src={pictureUrl} alt={name} />
      </td>
      <td>
        <h5>{name}</h5>
      </td>
      <td>
        <h5>{popularity}</h5>
      </td>
      </>
  );
};

export default ActorCard;
