import "./App.css";
import contactsData from"./contacts.json"
import { useState } from "react";


function App() {
  const [contacts,setContacts] = useState(contactsData.slice(0,5))
  console.log(contacts)

  function randomContacts(){
    let copiedArray = [...contacts]
    let indiceAleatorio = Math.floor(Math.random() * contactsData.length)
    let randomElement = contactsData[indiceAleatorio]
    if (!copiedArray.some(contact => contact.id === randomElement.id)) {
      copiedArray.push(randomElement);
      setContacts(copiedArray);
    } else {
      randomContacts();
    }
  }

    function sortByPopularity() {
      let copiedArray = [...contacts];
      copiedArray.sort((a, b) => b.popularity - a.popularity);
      setContacts(copiedArray);
    }

    function sortByName() {
      let copiedArray = [...contacts];
      
      copiedArray.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
    
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    
      setContacts(copiedArray);
    }
    
    function deleteContact(index) {
      let copiedArray = [...contacts];

      copiedArray.splice(index, 1)

      setContacts(copiedArray);
    }
    
  

  return(
    <div className="App">
      <h1>LAB | React IronContacts</h1>


  <button onClick={randomContacts}>Add random contact</button>
  <button onClick={sortByPopularity}>Sort by popularity</button>
  <button onClick={sortByName}>Sort by name</button>


      <table>
  <tr>
    <td>Image</td>
    <td>Name</td>
    <td>Popularity</td>
    <td>Amy</td>
    <td>Oscar</td>
    <td>Actions</td>
  </tr>
  {contacts.map((eachContact, index)=>{
    return (
      <tr key={eachContact.id}>
   <td ><img id="actor-picture" src={eachContact.pictureUrl} alt="picture of actor" /></td> 
   <td>{eachContact.name}</td>
   <td>{eachContact.popularity.toFixed(2)}</td>
   <td>{eachContact.wonEmmy && <p>🏆</p>}</td>
   <td>{eachContact.wonOscar && <p>🌟</p>}</td>
   <td><button onClick={() => deleteContact(index)}>Delete</button></td>
      </tr>

    )
  }
  )}
</table>


      
    </div>
  );
}

export default App;
