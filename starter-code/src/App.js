import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Artists from './components/Artists.js'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      artistArray: this.fiveArtist(),
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  fiveArtist() { //Accessing the 5 first contacts from contacts array
    const fiveArtistArray = [];
    for(let i = 0; i < 5; i += 1){
      fiveArtistArray.push(contacts[i])
    }
    console.log(fiveArtistArray)
    return fiveArtistArray;
  }

  randomContact(){ //Select a random contact from contacts array
    return contacts[Math.floor(Math.random() * contacts.length)];
  }

  clickHandler(){ //Click render
    const artistArrayCopy = [...this.state.artistArray];
    artistArrayCopy.unshift(this.randomContact())
    this.setState({
      artistArray: artistArrayCopy
    })
  }

  render()  {
    return (
      <div className="container">
      <h2>IronContacts</h2>
      <button onClick={this.clickHandler}>Add Random Contact</button>
        <div class='table_container'>
          <div class='table_titles'>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </div>
          <div>
            {
            this.state.artistArray.map((artist, idx) => {
              return <Artists key={idx} name={this.state.artistArray[idx].name} pictureUrl={this.state.artistArray[idx].pictureUrl} popularity={this.state.artistArray[idx].popularity}/>
            })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
