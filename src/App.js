import logo from './logo.svg';
import './App.css';
import movieContactData from './contacts.json';
import React, { useState } from 'react';

function App() {
  const [ veryImportantPeople, setVeryImportantPeople ] = useState(movieContactData.slice(0, 5));
 
  const addNewVip = () => {
    let newVipIndex = Math.floor(Math.random() * movieContactData.length);
    let newVip = movieContactData[newVipIndex];
    setVeryImportantPeople([...veryImportantPeople, newVip])
  }

  const sortByName = () => {
    const vipArr = JSON.parse(JSON.stringify(veryImportantPeople));
    vipArr.sort((a, b) => {
      return a.name > b.name ? 1 : a.name < b.name ? -1 : 0; 
    })
    setVeryImportantPeople(vipArr)
  }

  const sortByPopularity = () => {
    const vipArr = JSON.parse(JSON.stringify(veryImportantPeople));
    vipArr.sort((a, b) => b.popularity - a.popularity);
    setVeryImportantPeople(vipArr);
  }

  const deleteVip = index => {
    let filteredVips = veryImportantPeople.filter((person, idx) => index !== idx);
    setVeryImportantPeople(filteredVips);
  }

  return (
    <div>
      <h1>IronContacts</h1>
      <div className="button-container">
        <button onClick={addNewVip}>Add a new VIP</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        {veryImportantPeople.map((person, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td><img className="picture" src={person.pictureUrl}></img></td>
                <td>{person.name}</td>
                <td>{person.popularity}</td>
                <td><button onClick={() => deleteVip(index)} >Delete</button></td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  );
}

export default App;
