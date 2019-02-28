import React, { Component } from 'react';

export default class ContactItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, pictureUrl, popularity } = this.props.contact;

    return (
      <div className="columns row level-item">
        <div className="column">
          <figure className="image container is-128x128">
            <img src={pictureUrl} alt={name} />
          </figure>
        </div>
        <div className="column">
          <strong className="is-size-4">{name}</strong>
        </div>
        <div className="column">
          <strong className="is-size-4">{popularity}</strong>
        </div>
      </div>
    );
  }
}