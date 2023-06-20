import { useState } from 'react';
import contactsData from './contacts.json'
import './App.css';

function App() {

  const [contacts, setContacts] = useState(contactsData)

  let firstFive = contacts.slice(0, 5);

  console.log(firstFive);

  const deleteContact = (contactId) => {
        
        
    const newList = contacts.filter((element)=> {
        return element.id !== contactId;
    }
    )
    setContacts(newList);
}

const ContactsTable = (contacts) => {
  let sortedList = [...contacts];
  sortedList.sort((a, b) => {
    if (a.popularity < b.popularity) {
      return -1;
    }
    if (a.popularity > b.popularity) {
      return 1;
    }
    return 0;
})
};

  return (
    <div className="App">
    <h1>IronContacts</h1> 
    <button onClick={() => {ContactsTable()}}>Sort by Popularity</button>
    {firstFive.map((contactObj) => {
    return(
      <div className='container'>
      
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </thead> 
        <tbody>
          <td><img src={contactObj.pictureUrl} alt="actorPicture" /></td>
          <td>{contactObj.name}</td>
          <td>{contactObj.popularity}</td>
          <td>{contactObj.wonOscar === true ? '🏆' : 'No'}</td>
          <td>{contactObj.wonEmmy === true ? '🏆' : 'No'}</td>
          
        </tbody>
      </table>
      <button onClick={ () => {deleteContact(contactObj.id)}}>Delete this movie</button>
      </div>
   ) } )}

   

    </div>
  );
}

export default App;
