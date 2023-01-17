import "./App.css";
import contacts from "./contacts.json"
import { useState } from "react";

function App() {
  const contactsArr = contacts.slice(0, 5);
  // console.log (contactsArr);

  const [contactsExsistArr, setContacts] = useState(contactsArr);  

  const contactsRestArr = contacts.slice(5, (contacts.length+1));
  //console.log(contactsRestArr); 
  

  const addNewContacts = () => { 
    let indexInContactsRestArr = Math.floor(Math.random()*contactsRestArr.length)-1; 
    let newContact = contactsRestArr.splice(indexInContactsRestArr, 1) 
    // console.log(newContact)    
    setContacts([...contactsExsistArr, newContact[0]])
  } 
  // console.log(contactsExsistArr)

  //Sort Contacts by Name and Popularity
  const sortByPopularity = () => {
    let copy = [...contactsExsistArr]
    setContacts(() => {
      copy.sort((a, b) => {
        const popularityA = a.popularity
        const popularityB = b.popularity        
        return popularityB - popularityA;
      })
      return copy;
    });
  }


  const sortByName = () => {
    let copy = [...contactsExsistArr]
    setContacts(() => {
      copy.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      })
      return copy;
    });
  }

  //Remove Contacts
  const deletContact = (idOfTheContactToDelete) =>{
    const newListOfContacts = contactsExsistArr.filter((contact) =>{
      return contact.id !== idOfTheContactToDelete;
    });
    setContacts(newListOfContacts)
  }


  return (
  <div className="App">
      <h1>IronContacts</h1>
        <button className=" buttonTop" onClick={addNewContacts} >Add Random Contact</button>
        <button className=" buttonTop" onClick={sortByPopularity} >Sort by popularity</button>
        <button className=" buttonTop" onClick={sortByName} >Sort by name</button>
      <table className="contactTable">
        <thead className="contactDetails">
          <tr className="theader">
            <th className="td">Picture</th>
            <th className="td">Name</th>
            <th className="td">Popularity</th>
            <th className="td">Won an Oscar</th>
            <th className="td">Won an Emmy</th>
            <th className="td"></th>
          </tr>
        </thead>
        <tbody>
          {contactsExsistArr.map((contact) => {
            return (
              <div className="contactDetails">
                <tr className="theader" key={contact.id}>
                  <td className="td"><img src={contact.pictureUrl} alt="" /></td>
                  <td className="td">{contact.name}</td>
                  <td className="td">{contact.popularity.toFixed(2)}</td>
                  <td className="td">{(contact.wonOscar) ? "🏆" : null}</td>
                  <td className="td">{(contact.wonEmmy) ? ":star2" : null}</td>
                  <td className="td"><button className=" button" onClick={() => deletContact(contact.id)}>Delete</button></td>
                </tr>
              </div>
            )
          })}
        </tbody>
      </table>
       
        
   
  </div>
  );
}
export default App;