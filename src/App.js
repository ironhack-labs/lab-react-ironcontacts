import logo from './logo.svg';
import './App.css';
import contactList from './contacts.json'
import { useState } from "react";



function AddRandomContact () {
  const [contactsArr, setContactsArr] = useState(contactList);
  const randomContactNumber = Math.floor(Math.random()*contactsArr.length)
  const randomContact = contactsArr[randomContactNumber]
  
}



function App() {
  
  const firstFiveArr = contactList.slice(0,5);

  const [contactsArr, setContactsArr] = useState(firstFiveArr);
  

  function addRandomContact () {
    const randomContactNumber = Math.floor(Math.random()*contactList.length)
    const randomContact = contactList[randomContactNumber]
    
    
    const newArr = [...contactsArr, randomContact]
    setContactsArr(newArr)
    
  }

  function sortAZ () {
    const newArr = [...contactsArr]
    const sortedArr = newArr.sort(function(a, b) {
  if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  return 0;
  })
    console.log(sortedArr)
    setContactsArr(sortedArr)
  }

  function sortPopularity () {
    const newArr = [...contactsArr]
    const sortedArr = newArr.sort(function(a, b) {
  return b.popularity-a.popularity;
  });
  console.log(sortedArr)
    setContactsArr(sortedArr)
  }

  function deleteContact(contactId) {

    const newContactList = contactsArr.filter((contact) => {
      return contact.id !== contactId;
    });
    setContactsArr(newContactList);
  }

  
  return (
    <div className="App">
      <button onClick={() => {addRandomContact()}}>Add Random Contact</button>
      <button onClick={() => {sortAZ()}}>Sort A-Z</button>
      <button onClick={() => {sortPopularity()}}>Sort Popularity</button>
      
      

        <table>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Delete</th>
          </tr>
          {contactsArr.map((contactDetails) => (
          <tr key={contactDetails.id}>
            <td>{contactDetails.name}</td>
            <td><img src={contactDetails.pictureUrl} alt = {contactDetails.name} /></td>
            <td>{contactDetails.popularity}</td>
            <td>{contactDetails.wonOscar && "🏆"}</td>
            <td>{contactDetails.wonEmmy && "🏆"}</td>
            <td><button onClick={() => {deleteContact(contactDetails.id)}}>Delete Contact</button></td>
          </tr>
          ))}
        </table>
    </div>
  );
}

export default App;
