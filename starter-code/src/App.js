import React, { Component } from 'react';
import contacts from './contacts.json';
import ListElement from './components/ListElement';
import './App.css';

class App extends Component {

  state = {
    movieStars: contacts.slice(0, 5),
  }

  addRandomToArray = () => {
    this.setState({
      movieStars: this.state.movieStars.concat(contacts[Math.floor(Math.random() * contacts.length)]),
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
            {movieStars.map(item => (
             <ListElement key={item.id} img={item.pictureUrl} name={item.name} popularity={item.popularity}/>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
