import React from 'react';
import './App.css';

import Button from './components/button'
import List from './components/contactsList';


function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <h1>IronContacts</h1>
        <div className='row'>
          {/* <Button text='Add random contact' />
          <Button text='Sort by name' />
          <Button text='Sort by popularity' /> */}
        </div>
        <List />


      </header>
    </div>
  );
}

export default App;
