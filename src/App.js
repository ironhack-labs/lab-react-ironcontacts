import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {  
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="contactList">
        <Contact/>
      </div>
      
    </div>
  );
}

export default App;
