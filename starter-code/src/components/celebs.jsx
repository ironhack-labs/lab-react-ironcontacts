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
        <img src={names.pictureUrl} alt={names.name} />
        <h3> {names.name}</h3>
        <p>popularity: {names.popularity}</p>
        <button onClick={() => deleteOne(names)}>deleet this</button>
      </div>
    );
  }
}

export default Celebs;
