import React from 'react';

import './App.css';

import ListContact from './components/ListContact';
const contactData = require('./contacts.json');



console.log(contactData);

function App() {
  return (
    <div className="App">
      <ListContact list={contactData} />
    </div>
  );
}

export default App;
