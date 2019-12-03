import React from 'react';
import './App.css';

import DynamicContactsList from './Components/DynamicList'

function App() {
  return (
    <section className="container center">

      <div className="row">

      <div className="col-md-8">

      <h1>Listado dinámico de famositos</h1>
      
          <DynamicContactsList />

      </div>

      </div>

    </section>
  )
}

export default App;
