import React from 'react';
import MovieTable from './MovieTable/MovieTable'
import './App.scss'
import 'bulma/css/bulma.css';

function App() {
  return (

    <main className="main-app hero">
      <section className="main-app hero-body">
        <MovieTable />
      </section>
    </main>


  );
}

export default App;
