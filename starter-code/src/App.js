import React, { Component } from 'react';
import Data from './contacts.json'
import './App.css';
import Header from './components/Header'
import Main from './components/Main'

class App extends Component {
  state = {
    contacts: Data.slice(0,5)
  }

  componentDidMount(){
    
  }

  

  render() {
    return (
      <div className="App">
        <Header/>
        <Main contacts={this.state.contacts}/>
        {/* {console.log(this.state.contacts)} */}
      </div>
    );
  }
}

export default App;
