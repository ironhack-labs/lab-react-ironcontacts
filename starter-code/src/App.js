import React, { Component } from 'react';
import ListArtist from './components/ListArtist';
import AddRandomArtist from './components/randomArtist/AddRandomArtist'

class App extends Component {
  render() {

    return (
    <div>
      <div>
        <AddRandomArtist />
      </div>
      <div>
        <ListArtist joke="me rajo las venas"/>
      </div>
    </div>
    );
  }
}

export default App;
