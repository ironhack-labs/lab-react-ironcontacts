import React from 'react';
import './App.css';

import DynamicContactsList from './Components/DynamicList'

function App() {
  return (
    <section className="container">

      <div className="row justify-content-center">

      <div className="col-md-8 text-center">

      <h1>Listado dinámico de famositos</h1>
      
          <DynamicContactsList />

      </div>

      </div>

    </section>
  )
}

export default App;
