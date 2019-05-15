import React from 'react';

import './App.css';
import Actors from './Actors';
// import Contacts from './contacts.json'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Actors />
      </div>
    );
  }
}

export default App;
