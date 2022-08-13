import { useState } from 'react';
import './App.css';
import contactsArray from './contacts.json';

function App() {
  const fiveContacts = contactsArray.slice(0, 5);
  const [contacts, setContacts] = useState(fiveContacts);
  const listContacts = contacts.map(contact => {
    const roundedPopularity = Math.round(contact.popularity * 100) / 100;
      return (
        <tr>
          <td>
            <img
              src={contact.pictureUrl}
              alt="Contact profile"
              className="contact-img"
              width={100} height={100}
            />
          </td>
          <td>{contact.name}</td>
          <td>{roundedPopularity}</td>
          {contact.wonOscar ? <td>🏆</td> : <td></td>}
          {contact.wonEmmy ? <td>🏆</td> : <td></td>}
        </tr>
      )
    } )
    const handleRandom = () => {
      setContacts((prevState) => [
        ...prevState, contactsArray[
        Math.floor(Math.random() * (prevState.length - 0 + 1) + 0)
        ]])
        };

    const handleSorting = () => {
      setContacts((prevState) => {
        let namesArr = prevState.map((contact) => Object.values(contact)[0])
        let namesInOrder = namesArr.sort()
        let result = prevState.map((item, idx, array) =>
           array.find((contact ) => {
          return namesInOrder[idx] === Object.values(contact)[0]
          })
      )
      return result
      })
      }

      const handleSortPopularity = () => {
        setContacts((prevState) => {
          let popArr = prevState.map((contact) => Object.values(contact)[2])
          let mostPopular = popArr.sort(function(a,b){return b-a})
          let result = prevState.map((item, idx, arr) =>
          arr.find ((contact) => {
            return mostPopular[idx] === Object.values(contact)[2]
          })
        )
        return result
        })
        }
  return (
    <div className="App">
      <div className="header">
        <h1>IronContacts</h1>
        <button onClick={() => handleRandom()}>Add Random Contact</button>
        <button onClick={() => handleSorting()}>Sort by Name</button>
        <button onClick={() => handleSortPopularity()}>The most popular</button>
      </div>
      {/* {contact === contact ? contact.hide() : contact.show()} */}
      <table className="contacts-table">
        <tbody>
          <tr>
            <td>
              <strong>Picture</strong>
            </td>
            <td>
              <strong>Name</strong>
            </td>
            <td>
              <strong>Popularity</strong>
            </td>
            <td>
              <strong>Won <br />Oscar</strong>
            </td>
            <td>
              <strong>Won <br />Emmy</strong>
            </td>
          </tr>
          {listContacts}
        </tbody>
      </table>
    </div>
  )
}



export default App;
