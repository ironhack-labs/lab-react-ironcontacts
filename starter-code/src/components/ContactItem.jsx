import React, { Component } from 'react';

const ContactItem = (props) => {
    return (
      <div className="columns row level-item">
        <div className="column">
          <figure className="image container is-64x64">
            <img src={props.pictureUrl} alt={props.name} />
          </figure>
        </div>
        <div className="column">
          <strong className="is-size-4">{props.name}</strong>
        </div>
        <div className="column">
          <strong className="is-size-5">{props.popularity.toFixed(2)}</strong>
        </div>
        <div className="column">
          <button type="button" className="button is-normal is-danger is-inverted" onClick={props.onClickDelete}>Remove</button>
        </div>
      </div>
    );
  }

export default ContactItem;