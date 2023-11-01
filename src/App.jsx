import './App.css';
import allContacts from "./contacts.json"
import {useState} from "react"

function App() {

  const [contactsList, setContactsList] = useState(allContacts.slice(0, 5))

  const addRandomContact = () => {
    if(contactsList.length === allContacts.length) {
      return;
    };

    const randomNumber = Math.floor(Math.random() * allContacts.length);
    const randomContact = allContacts[randomNumber];

    const contactId = contactsList.map((eachContact) => eachContact.id);
    contactId.includes(randomContact.id) ? addRandomContact() : setContactsList([...contactsList, randomContact]);
  }

  const sortByName = () => {
    const contactsCopy = [...contactsList];
    contactsCopy.sort((elem1, elem2) => elem1.name > elem2.name ? 1 : -1);
    setContactsList(contactsCopy);
  }  

  const sortByPopularity = () => {
    const contactsCopy = [...contactsList];
    contactsCopy.sort((elem1, elem2) => elem1.popularity > elem2.popularity ? -1 : 1);
    setContactsList(contactsCopy);
  }

  const deleteContact = (index) => {
    const contactsCopy = [...contactsList];
    contactsCopy.splice(index, 1)
    setContactsList(contactsCopy)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className='btn-container'>
        <button className='action-btn' onClick={addRandomContact} >Add Random Contact</button>
        <button className='action-btn' onClick={sortByPopularity} >Sort by popularity</button>
        <button className='action-btn' onClick={sortByName} >Sort by name</button>
      </div>
      <br />
      <br />
      <table id='contacts-table' cellSpacing={0}>
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