import React from 'react';
import './App.css';
import Contacts from './components/contacts'

function App() {
  return (
    <div className='body'>
    <section className='container'>
    <div className='row center'>
    <div className='col-md-8 '>
      <Contacts />
      </div>
      </div>
</section>
    </div>
  );
}

export default App;
