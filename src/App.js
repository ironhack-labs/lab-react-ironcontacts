import React from 'react';
import './App.css';
import IronContacts from "../src/Components/IronContacts/IronContacts"

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <IronContacts></IronContacts>
      </div>
    );
  }
}

export default App;