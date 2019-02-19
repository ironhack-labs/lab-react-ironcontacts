import React from 'react';
import Button from '../button/Button'
import './Card.css'

const Card = ({ actors, updateState }) => {
  const arrayList = actors.map((value) => {
    return (
      <div className="col-md-3 mt-1">
        <div className="card">
          <img src={value.pictureUrl} className="card-img-top" alt="..." width="150px;"></img>
          <div className="card-body">
            <h5 className="card-title">{value.name}</h5>
            <p className="card-text">{value.popularity}</p>
            <Button name="Delete" isDel updateState={updateState} actors={actors} actorName={value.name} />
          </div>
        </div>
      </div>
    );
  });

  return arrayList;
}

export default Card;
