import "./App.css";
import contactsData from "./contacts.json";
import { useState } from 'react';


function App() {
  // const slicedContects = contacts.slice(0,5);
  let [contacts, setContact] = useState(contactsData.slice(0,5))

  function addRandomContact (){
    // let contactFive = []
    // contactFive = contactsData.slice(5)

    let contactFive = contactsData.slice(5).filter(el => contacts.includes(el) === false)
    
    console.log(contactFive)
    let newContact = contactFive[Math.floor(Math.random() * contactFive.length)]
    
    setContact([newContact, ...contacts])
    contactFive = contactFive.filter(el => el !== newContact)
  
  }
  
  function sortbypopularity (){
  let sortetByP = [...contacts].sort((a,b)=> b.popularity - a.popularity)
  return  setContact(sortetByP)
  }

  function sortbyname (){
   let sortByN = [...contacts].sort((a,b)=> a.name.localeCompare(b.name)) 
   return  setContact(sortByN)
  }

  const deleteContact = (id) => {
    const filteredConact = contacts.filter(delCon => {
      return delCon.id !== id
    })
    setContact(filteredConact)
  }
  
  return <div className="App">
  <button onClick={addRandomContact}>Add random contact</button>
  <button onClick={sortbypopularity}>Sort by popularity</button>
  <button onClick={sortbyname}>Sort by name</button>
  <section>
<table>
      <tr>
        <th>Pictute</th>
        <th>Name</th>
        <th>Populatity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
        <th>Actions</th>
      </tr>
    {contacts.map(contact => (
      <tr key={contact.id}>
        <td> <img class="img" src={contact.pictureUrl} alt="" /></td>
        <td>{contact.name}</td>
        <td>{Math.round(contact.popularity * 100)/100}</td>
        <td>{contact.wonOscar ? '🏆' : ''}</td>
        <td>{contact.wonEMMY ? '🏆' : ''}</td>
        <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
      </tr>
    ))
    }
    <tfoot></tfoot>
</table>
  </section>



  </div>;
}
export default App;

