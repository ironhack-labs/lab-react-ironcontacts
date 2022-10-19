import "./App.css";
import contactsArr from "./contacts.json"
import { useState } from "react";


function App() {
  let firstFive = contactsArr.slice(0,5);
  const [contacts, setContacts] = useState(firstFive)
  
  //Felipe's Solution
  const addRandom = () => {
		const randomIndex = Math.floor(Math.random() * contactsArr.length);

		if (contacts.length === contactsArr.length) {
      console.log('reached the end of list')
			return;
		}

		if (contacts.indexOf(contactsArr[randomIndex]) === -1) {
			setContacts([...contacts, contactsArr[randomIndex]]);
			return;
		}

		addRandom();
	};

  //2nd Solution shared
  // const addRandomContact = ()=>{
  //   setContacts((prevContacts)=>{
  //     const newContactsList = contactsArr.filter((contact)=> {
  //       return !prevContacts.includes(contact);
  //     });
  //     const getRandomContact = newContactsList[Math.floor(Math.random()* newContactsList.length)];
  //     const newConctactSelection = [...prevContacts,getRandomContact]
  //     return newConctactSelection;
  //   })
  // };
  
  //One of my many broken solution
  //   const addRandom = () => {
  //   const remainingContacts = contactsArr.slice(5)
  //   let randomIndex = Math.floor(Math.random() * remainingContacts.length);
  //   let newRandomContact = remainingContacts[randomIndex];
  //   remainingContacts.splice(randomIndex, 1);
  //   setContacts([...contacts, newRandomContact]);
  // }
  
  const sortByName = () => {
    const sortedCopy = [...contacts];
    sortedCopy.sort((a,b) => a.name.localeCompare(b.name));
    setContacts(sortedCopy)
  }
  const sortByPopularity = () => {
    const sortedCopy = [...contacts];
    sortedCopy.sort((a,b) => b.popularity - a.popularity);
    setContacts(sortedCopy)
  }
  const deleteContact = (contactId) => {
    const newList = contacts.filter(contact => contact.id !== contactId)
    setContacts(newList)
  }


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
          <table>
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
              {contacts.map((contact)=>{
                return (
                  <tr key={contact.id}>
                    <td><img src={contact.pictureUrl} alt={contact.name}/></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity.toFixed(2)}</td>
                    <td>{contact.wonOscar && "🏆"}</td>
                    {contact.wonEmmy ? <td> ⭐️ </td> : <td></td>}
                    <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
    </div>
  )
}

export default App;
