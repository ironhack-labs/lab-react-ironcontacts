import './App.css';
import myContacts from './contacts.json';
import React, { useState } from 'react';

function App() {
  const [ Celebrities, setCelebrities ] = useState(myContacts.slice(0, 5));

  const addnewCeleb = () => {
    let newCelebIndex = Math.floor(Math.random() * myContacts.length);
    let newCeleb = myContacts[newCelebIndex];
    setCelebrities([...Celebrities, newCeleb])
  }

  const sortByName = () => {
    const celebArr = JSON.parse(JSON.stringify(Celebrities));
    celebArr.sort((a, b) => {
      return a.name > b.name ? 1 : a.name < b.name ? -1 : 0; 
    })
    setCelebrities(celebArr)
  }

  const sortByPopularity = () => {
    const celebArr = JSON.parse(JSON.stringify(Celebrities));
    celebArr.sort((a, b) => b.popularity - a.popularity);
    setCelebrities(celebArr);
  }

  const deleteVip = index => {
    let filteredCelebs = Celebrities.filter((person, idx) => index !== idx);
    setCelebrities(filteredCelebs);
  }

  return (
    <div className="App">
    <div>
      <h1>IronContacts</h1>
      <div className="button-container">
        <button id="one" onClick={addnewCeleb}>Add a new Celebrity</button>
        <button id="two" onClick={sortByName}>Sort by name</button>
        <button id="three" onClick={sortByPopularity}>Sort by popularity</button>
      </div>
      <br/>
      <br/>
      <table>
        <thead>
          <tr>
            <th id="myPicture">Picture</th>
            <th id="myName">Name</th>
            <th id="myPop">Popularity</th>
          </tr>
        </thead>
        {Celebrities.map((person, index) => {
          return (
            <tbody id="thePicture" key={index}>
              <tr>
                <td><img src={person.pictureUrl}></img></td>
                <td>{person.name}</td>
                <td>{person.popularity}</td>
                <td><button id="four" onClick={() => deleteVip(index)} >Delete</button></td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
    </div>
  );
}

export default App;