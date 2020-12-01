
import './App.css';
import contacts from './../contacts.json';
import React, { Component } from 'react'
import Contacts from './contacts/Contacts';

function App() {

  return (
    <div className='thePage' >
   <Contacts/>
   </div>
  );
}


export default App;
