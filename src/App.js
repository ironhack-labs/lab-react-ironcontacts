import React from 'react';
import './App.css';
import Contacts from './Components/Contacts/Contacts'



class App extends React.Component {
  render() {
    return (
      <div className="App">
         <ul>{Contacts}</ul>
      </div>
    );
  }
}

export default App;