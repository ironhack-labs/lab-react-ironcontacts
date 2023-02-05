import './App.css';
import { useState } from 'react';
import contactList from "./contacts.json"

function App() {

const contactFive = contactList.slice(0,5)
const [contactInfo, setContactInfo] = useState(contactFive)

//Add
const addContact = () => {
  const random = contactList[Math.floor(Math.random()* contactList.length)]
  const newList = [...contactInfo]
  newList.push(random)
  setContactInfo(newList)
}

//sort name
const sortName = ()=>{
  const newList = [...contactInfo] //contiene la info + los 5
    newList.sort((a,b)=>{
      if (a.name < b.name){
        return -1
      }
      if (a.name > b.name){
        return 1
      }
      return 0
    })
  
    setContactInfo(newList)
  }

//Sort popularity
const sortPopularity= ()=>{
  const newList = [...contactInfo]
    newList.sort((a,b)=>{
      if (a.popularity > b.popularity){
        return -1
      }
      if (a.popularity < b.popularity){
        return 1
      }
      return 0
    })
  
    setContactInfo(newList)
  }

//Delete
const deleteContact = (index) => {
  const newArr = [...contactInfo]
  newArr.splice(index, 1)  
  setContactInfo(newArr)
}

  return (
    <div className="App">
      <div className="Header">
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortName}>Sort By Name</button>
      <button onClick={sortPopularity}>Sort By Popularity</button>
      </div>
      <table>
        <thead className="Header-table">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
          <tbody>
              {
              contactInfo.map((contact, contact_index) => (
                <tr key={contact_index}>
                  <td><img src={contact.pictureUrl} height="180" width="120"/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                  {contact.wonOscar && <p>🏆</p>}
                  {!contact.wonOscar && <p>No</p>}
                  </td>
                  <td>
                  {contact.wonEmmy && <p>🏆</p>}
                  {!contact.wonEmmy && <p>No</p>}
                  </td>
                  <td>
                  <button onClick={deleteContact}>Delete Contact</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
      </table>

    </div>
  );
}

export default App;
