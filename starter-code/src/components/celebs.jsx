import React, { Component } from 'react';
import contacts from './../contacts.json';
import './../App.css';
import App from './../App';

class Celebs extends Component {
  render() {
    let names = this.props.contacts;
    let deleteOne = this.props.delete;
    return (
      <div className="card">
        <a
          href={`https://www.google.co.uk/search?q=${names.name}`}
          target="_new"
        >
          {' '}
          <img src={names.pictureUrl} alt={names.name} />
          <h3> {names.name}</h3>
        </a>
        <p>popularity: {names.popularity.toFixed(2)}</p>
        <button onClick={() => deleteOne(names)}>deleet this</button>
      </div>
    );
  }
}

export default Celebs;
