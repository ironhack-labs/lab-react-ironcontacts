import React from 'react';
import './CelebrityDetail.css';

export default function CelebrityDetail(props) {
  return (
    <div className="details">
      <img width="100px" src={props.detail.pictureUrl} />
      {props.detail.name}
      {props.detail.popularity}
      <button onClick={() => {props.deleteHandler(props.detail.id);}}>Delete!</button>
    </div>
  );
}
