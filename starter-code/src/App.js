import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css';

let movieStars = contacts.slice(0, 5);

class App extends Component {

  render() {
    return (
      <div className="App">
      <h1 className="homepage-title">IronContacts</h1>
        <table className="homepage-table">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          <tr>
            <td><img className="table-img" src={movieStars[0].pictureUrl} alt=""/></td>
            <td>{movieStars[0].name}</td>
            <td>{movieStars[0].popularity}</td>
          </tr>
          <tr>
            <td><img className="table-img" src={movieStars[1].pictureUrl} alt=""/></td>
            <td>{movieStars[1].name}</td>
            <td>{movieStars[1].popularity}</td>
          </tr>
          <tr>
            <td><img className="table-img" src={movieStars[2].pictureUrl} alt=""/></td>
            <td>{movieStars[2].name}</td>
            <td>{movieStars[2].popularity}</td>
          </tr>
          <tr>
            <td><img className="table-img" src={movieStars[3].pictureUrl} alt=""/></td>
            <td>{movieStars[3].name}</td>
            <td>{movieStars[3].popularity}</td>
          </tr>
          <tr>
            <td><img className="table-img" src={movieStars[4].pictureUrl} alt=""/></td>
            <td>{movieStars[4].name}</td>
            <td>{movieStars[4].popularity}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
