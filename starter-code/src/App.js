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
  }

  fiveArtist() { //Método que acessa os 5 primeiros elementos da array contacts
    const fiveArtistArray = [];
    for(let i = 0; i < 5; i += 1){
      fiveArtistArray.push(contacts[i])
    }
    console.log(fiveArtistArray)
    return fiveArtistArray;
  }
  

  render()  {
    return (
      <div className="container">
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
