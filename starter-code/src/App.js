import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css';

class App extends Component {

  state = {
    movieStars: contacts.slice(0, 5),
    loaded: true,
  }

  addRandomToArray = () => {
    this.setState({
      movieStars: this.state.movieStars.concat(contacts[Math.floor(Math.random() * contacts.length)]),
      // loaded: !this.state.loaded,
    });
  }

  render() {
    const { movieStars } = this.state;
    return (
      <div className="App">
      {console.log(movieStars)}
      <h1 className="homepage-title">IronContacts</h1>
      <button onClick={this.addRandomToArray} className='add-random-btn'>Add Random Contact</button>
        <table className="homepage-table">
          <tbody>
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
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
