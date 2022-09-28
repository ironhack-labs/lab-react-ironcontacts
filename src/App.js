import './App.css';
import contactsArray from './contacts.json'
import { useState } from 'react';

let contacts = [];

for(let i = 0; i < 5; i++){
  contacts[i] = contactsArray[i];
}

function App() {

  const [contactList,setList] = useState(contacts)

  const addRandomContact = () =>{
    const randIndex = Math.floor(Math.random()*52);
    const contactsCopy = [...contactList]

    if(!contactsCopy.includes(contactsArray[randIndex])){
      contactsCopy.push(contactsArray[randIndex]);
    }
    
    setList(contactsCopy);
  }

  const sortPopularity = () => {
    const contactsCopy = [...contactList]

    contactsCopy.sort((a,b) => {
      if(a.popularity > b.popularity){
        return -1;
      }
      if(a.popularity < b.popularity){
        return 1;
      }
      return 0;
    })
    setList(contactsCopy)
  }

  const sortName = () => {
    const contactsCopy = [...contactList]

    contactsCopy.sort((a,b) => {
      if(a.name > b.name){
        return 1;
      }
      if(a.name < b.name){
        return -1;
      }
      return 0;
    })
    setList(contactsCopy)
  }

  const deleteContact = (contactId) =>{
    const contactsCopy = [...contactList]

    const newContacts = contactsCopy.filter((element) => {
      return element.id !== contactId
    })

    setList(newContacts)
  }

  return (
    <div className="App">  
      <h1>IronContacts</h1>
      <button onClick={()=>{
        addRandomContact();
      }}>Add Random Contact</button>
      <button onClick={() =>{
        sortPopularity();
      }}>Sort by popularity</button>
      <button onClick={() =>{
        sortName();
      }}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won<br/>Oscar</th>
            <th>Won<br/>Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map(element => {
            return(
              <tr key={element.id}>
                <td><img src={element.pictureUrl} alt='pic'/></td>
                <td>{element.name}</td>
                <td>{element.popularity.toFixed(2)}</td>
                {element.wonOscar ? <td>🏆</td> : <td> </td>}
                {element.wonEmmy ? <td>🏆</td> : <td> </td>}
                <td><button onClick={() => deleteContact(element.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
