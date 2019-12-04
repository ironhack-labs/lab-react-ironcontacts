import React from 'react'
import List from './components/List'
import Celebs from './components/Celebs'

// import contacts from 'react'

import './App.css';

function App() {
  return (
    <>
      <h1>Iron contacts</h1>
      <section className="container">

        <div className="row justify-content-center">

          <div className="col-2"><h2>Picture</h2></div>
          <div className="col-2"><h2>Name</h2></div>
          <div className="col-2"><h2>Popularity</h2></div>

        </div>
      </section >

      < List />
      <Celebs />
    </>

  )
}

export default App;
