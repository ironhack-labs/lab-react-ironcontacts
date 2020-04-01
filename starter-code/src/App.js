import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
// import Headlines from './components/Headlines.jsx';
import Contacts from './components/Contacts.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
                <Header />
          </header>

            <div className="App-intro">
                   {/* <Headlines />  */}
                  <Contacts />            
            </div>
      </div>
    );
  };
}

export default App;
