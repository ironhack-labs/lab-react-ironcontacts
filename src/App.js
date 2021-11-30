import React from 'react';
import './App.css';
import CelebrityList from './CelebrityList';
const App = () => {
  return (
    <div className="App">
      <h1>IronContact</h1>
      <button className="btn">Add Random Contact</button>
      <tr className="tableHead">
        <td><h3>Picture</h3></td>
        <td><h3>Name</h3></td>
        <td><h3>Popularity</h3></td>
      </tr>
      <CelebrityList



      />
    </div>
  )
}

export default App;
