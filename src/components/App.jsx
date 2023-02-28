import logo from './../logo.svg';
import './App.css';
import { useState } from 'react';
import contacts from "./../contacts.json";

const App = () => {
  // const contacts = ({ picture, name, popularity })
  // const celebrity = ({ picture, name, popularity })
  // const { celebrity, setCelebrity } = useState(contacts)
  const [contactsArray, setContactsArray] = useState(contacts.slice(0, 5))
  const addCelebrity = (max, min) => {
    const newCelebrity = contactsArray.Math.floor(Math.random() * (max - min) + min)
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture:</th>
            <th>Name:</th>
            <th>Popularity:</th>
            <th>wonOscar:</th>
            <th>wonEmmy:</th>
          </tr>
        </thead>
        <tbody>
          <tr> {
            contactsArray.map(({ _id, picture, name, popularity, wonOscar, wonEmmy }) => {
              return (
                <article key={_id}>
                  <button onClick={addCelebrity}>Add Celebrity</button>
                  <td><img src={{ picture }} /></td>
                  <td>{name}</td>
                  <td>{popularity}</td>
                  <td>{wonOscar ? ' 🏆' : 'NO'} </td>
                  <td>{wonEmmy ? ' 🏆' : 'NO'}</td>
                </article>)
            })}</tr>
        </tbody>

      </table>
    </div>
  );
}

export default App;
