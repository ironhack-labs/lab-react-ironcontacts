import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const firstFive = contacts.slice(0,5);
  const [list, setList] = useState(firstFive)

  const addRandomContact = () => {
    const randomIndex = Math.floor( Math.random() * contacts.length);
    const randomContact = contacts[randomIndex];
    let contactsCopy = [...list];
    if(!contactsCopy.includes(randomContact)){
      contactsCopy.push(randomContact);
    }
    setList(contactsCopy);
  }

  const sortByPopularity = () => {
    const listCopy = [...list];
    const sortedByPopularity =  listCopy.sort( (a , b) => {
      if( a.popularity < b.popularity){
        return 1
      }
      else{
        return -1
      }
    })
    setList(sortedByPopularity);
  }
   
  const sortByName = () => {
    const listCopy = [...list];
    const sortedNames = listCopy.sort( (a, b) => {
      if(a.name > b.name){
        return 1;
      }
      else{
        return -1
      }
    });
    setList(sortedNames);
  }

  const handleOnDelete = (contactId)=> {
    const filteredContacts = list.filter( (contact) => {
      return contact.id !== contactId;
    })
    setList(filteredContacts)
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button  onClick={addRandomContact} className='random-btn'>Add Random Contact</button>
      <button onClick={sortByPopularity} className="sort-btn">Sort By Popularity</button>
      <button onClick={sortByName} className="sort-btn">Sort By Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        { list.map( (contact) => {
          return(
              <tbody >
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} alt="contact portrait" className='profile-picture'></img></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>{contact.wonOscar? '🏆' : '' }</td>
                  <td>{contact.wonEmmy? '🏆' : ''}</td>
                  <td><button onClick={() => handleOnDelete(contact.id)} className="delete-btn">Delete</button></td>
                </tr>
              </tbody>
            );
          })
        }
      </table>
    </div>
  );
}

export default App;