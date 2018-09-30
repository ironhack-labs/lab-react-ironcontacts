import React, { Component } from 'react';
import Table from './components/Table/Table';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Iron Contacts</h1>
        </header>
        <div className='columns'>
          <div className='column is-half is-offset-one-quarter'>
              <Table />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
