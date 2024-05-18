import './App.css';
import contacts from "./contacts.json";
import {useState} from "react"

function App() {

  const [contactsList, setContactsList] = useState(contacts.slice(0, 5))

  const addRandomContact = () => {
    if(contactsList.length === contacts.length);

    const randomNumber = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomNumber];

    const contactId = contactsList.map((eachContact) => eachContact.id);
    contactId.includes(randomContact.id) ? addRandomContact() : setContactsList([...contactsList, randomContact]);
  }
  
  const deleteContact = (index) => {
    const contactsCopy = [...contactsList];
    contactsCopy.splice(index, 1)
    setContactsList(contactsCopy)
  }
const sortByName = () => {
  const contactsCopy = [...contactsList];
  contactsCopy.sort((a,b) => a.name.localeCompare(b.name))
  console.log(contactsCopy)
  setContactsList(contactsCopy)
}
const sortByPopularity = () => {
  const contactsCopy = [...contactsList];
  contactsCopy.sort((a,b) => {
    if(a.popularity > b.popularity) {
      return -1
    } else {
      return 1
    }
  })
  setContactsList(contactsCopy)

  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className='btn-container'>
        <button className='action-btn' onClick={addRandomContact} >Add Random Contact</button>
        <button className='sort-btn' onClick={sortByPopularity}>Sort By Popularity</button>
        <button className='sort-btn' onClick={sortByName}>Sort By Name</button>

      </div>
      <br />
      <br />
      <table>
        <tr>
          <th><b>Picture</b></th>
          <th><b>Name</b></th>
          <th><b>Popularity</b></th>
          <th><b>Won Oscar</b></th>
          <th><b>Won Emmy</b></th>
          <th><b>Actions</b></th>
        </tr>
          {
            contactsList.map((eachContact, index) => {
              return(
                <tr>
                  <td><img src={eachContact.pictureUrl} alt="Foto" width="100px" /></td>
                  <td>{eachContact.name}</td>
                  <td>{eachContact.popularity}</td>
                  <td>{eachContact.wonOscar && "🏆" }</td> 
                  <td>{eachContact.wonEmmy && "🌟"}</td>
                  <td><button className='delete-btn' onClick={() => deleteContact(index)}><b>Delete</b></button></td>
                </tr>
              )
            })
          }
      </table>

    </div>
  );
}


export default App;
