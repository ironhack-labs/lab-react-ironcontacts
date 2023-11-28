import "./App.css";
import contactsAll from './contacts.json'
import {useState} from 'react'
import bin from './assets/bin.svg'


function App() {
  const contacts5 = contactsAll.slice(0,5);
  const [contacts, setContacts] = useState(contacts5)

  function addRandomContact () {
    //Get remaining contacts
      const remainingContacts = contactsAll.filter(contact => !contacts.find(c => c.id === contact.id))
      console.log(remainingContacts)
    // Randomly pick one
    const randomlyPicked = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    // Update setContacts([...contacts, randomlyPicked])
    setContacts(prevContacts => [...prevContacts, randomlyPicked]);
  }

  function filterByNames () {
    //Get the contacts shown at the moment
    //Sort the contacts by names alphabetically
    //Set new State by setContacts() => conditionally render the filter button/ dropwdown

  }

  function filterByPopularity () {
    //Get the contacts shown at the moment
    //Sort the contacts by popularity by its numerical value
    //Set new State by setContacts() => conditionally render the filter button/ dropwdown

  }

  function deleteCelebrety () {
    //Get the contacts shown at the moment
    //Remove contact which delete button is pressed by filtering it out via its id
    //Set new state by setContacts() with new variable contacts
  }
  
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button id="btn-addrandom" onClick={() => addRandomContact()}> Add random contact </button>
      <table>
        <thead>
          <tr>
            <th className="PictureCol">Picture</th>
            <th className="NameCol-header">Name
            <button> Random </button>
            </th>
            <th className="PopularityCol">Popularity</th>
            <th className="AwardCol">Oscar</th>
            <th className="AwardCol">Emmy</th>
            <th className="ActionCol">Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
          return(
            <tr key={contact.id}>
            <td className="PictureCol"> <img src={contact.pictureUrl} alt={`Image of ${contact.name}`}/></td>
            <td className="NameCol-body"> {contact.name}</td>
            <td className="PopularityCol"> {contact.popularity.toFixed(2)}</td>
            <td className="AwardCol"> {contact.wonOscar ? "🏆" : ""}</td>
            <td className="AwardCol"> {contact.wonEmmy ? "🌟" : ""}</td>
            <td className="AwardCol"> <button id="btn-delete-list"> <img src={bin}/> </button></td>
            </tr>
            )
        })}
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
