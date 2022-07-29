import logo from './logo.svg';
import './App.css';
import contactsData from './contacts.json'
import { useState } from 'react';


function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0,5));

  //V1
  const deleteContact = contactID => {
    const filteredContacts = contacts.filter(contact =>  contact.id !== contactID);
    setContacts(filteredContacts);
  }

  //V2
  // Q: dont understand line 11: what is the difference between "const deleteContact = contactID =>{}" and "deleteContact(contactID) {}"?
  // const deleteContact = contactID => {
  //   const filteredContacts = contacts.filter(contact => {
  //     return contact.id !== contactID
  //   });
  //   setContacts(filteredContacts);
  // }

  //V3
  // 2Q:
  //  1. how does the return work in the function for filter() method, doesnt it stop at the first check?
  //  2. how does setContacts function know what to take for prevContacts variable. We didnt give it any value aniwhere.
  // function deleteContact2 (contactID) {
  //   setContacts((prevContacts) =>{
  //     let filteredContacts2 = prevContacts.filter((contact) => {
  //       return contactID !== contact.id
  //     })
  //     return filteredContacts2;
  //   })
  // }

  function addRandom() {
    setContacts((prevContacts) =>{
      let copyArr = [...prevContacts]
      let randomContact = contactsData[Math.floor(Math.random()*contactsData.length)]
      let duplicateContact = false;
      copyArr.forEach(element => {
        if(element.id === randomContact.id) duplicateContact = true;
     });
     if (!duplicateContact) copyArr.push(randomContact);
      return copyArr;
    })
  }

  function sortByName () {
    setContacts((prevContacts) =>{
      let copyArr = [...prevContacts]
      copyArr.sort((a,b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if(nameA<nameB) return -1;
        if(nameA>nameB) return 1;
        return 0;
      })
      return copyArr
    })
  }

  function sortByPopularity () {
    setContacts((prevContacts) =>{
      let copyArr = [...prevContacts]
      copyArr.sort((a,b) => b.popularity-a.popularity)
      return copyArr
    })
 
  }

      return (
        <div className="App">
          <h2>IronContacts</h2>
          <button onClick={addRandom}>Add Random Contact</button>
          <button onClick={sortByName}>Sort by Name</button>
          <button onClick={sortByPopularity}>Sort by Popularity</button>
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
              <th>Actions</th>
            </tr>
            { contacts.map(contact => {
              return (
                <tr>
                  <td><img src={contact.pictureUrl} alt={contact.name}/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  {contact.wonOscar && <td>🏆</td>}
                  {contact.wonEmmy && <td>🏆</td>}
                  <td><button onClick={() => deleteContact(contact.id)}>Delete </button></td>
                </tr>
              )
            })
            }
          </table>
        </div>
      );
}

export default App;
