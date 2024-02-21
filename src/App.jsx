import "./App.css";
import { useState } from "react"
import contactsData from "./contacts.json";

function App() {

  const [contacts, setContacts] = useState([contactsData[0], contactsData[1], contactsData[2], contactsData[3], contactsData[4]]);

  const addRandomContacts = ()=> {
    const randContact =  contactsData[Math.floor(Math.random() * contactsData.length)];
    let doesExist = false;

    contacts.forEach((cont) =>{
      if(randContact.id === cont.id){
        doesExist = true;
      }
    })

    if(!doesExist){
      setContacts ((prevState) => [...prevState, randContact])
    }
  }

  const sortByPopularity = ()=> {
    const sortedArray = [...contacts].sort((a,b) => b.popularity - a.popularity);
    setContacts(sortedArray);
  }

  const sortByName = ()=> {
    const sortedArrayBy = [...contacts].sort((a,b) =>{
      if(a.name > b.name){
        return 1;
      }
      else if (a.name < b.name){
        return -1;
      }
    });

    setContacts(sortedArrayBy);
  }

  const deleteContact = (id) => {
    const updatedArray = contacts.filter ((contact) => contact.id !== id);
    setContacts(updatedArray);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button className="button" onClick={addRandomContacts}>Add Random Contact</button>
      <button className="button" onClick={sortByName}>Sort by Name</button>
      <button className="button" onClick={sortByPopularity}>Sort by Popularity</button>


      <table className="contacts">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        
        <tbody>
          {contacts.map((contact) => {
            return(
                <tr className="contact" key={contact.id}>
                  <td><img src={contact.pictureUrl}/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td className="award-td">{contact.wonOscar ? "🏆" : " "}</td>
                  <td className="award-td">{contact.wonEmmy ? "🌟" : " "}</td>
                  <td><button className="button" onClick={() => deleteContact(contact.id)}>Delete</button></td>
                </tr>
            )
          })}
        </tbody>

      </table>
    </div>
  );
}

export default App;
