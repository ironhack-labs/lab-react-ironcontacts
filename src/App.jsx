import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";
 
function App() {
  const splicedArray = structuredClone(contacts);
  const firstFive = splicedArray.splice(0,5);
  const [ironContacts, setIronContacts] = useState(firstFive);

  function addRandomContacts() {
      console.log(splicedArray)
      let newIronContacts = [...ironContacts];
      const randomindex = Math.floor(Math.random() * (splicedArray.length-1 + 1))
      newIronContacts.push(splicedArray[randomindex]);
      const removedItem = splicedArray.splice(randomindex,1);
      setIronContacts(newIronContacts);
      console.log(removedItem)
      console.log(splicedArray);
  }

  function sortByName() {
    const nameSortedArray = structuredClone(ironContacts);
    nameSortedArray.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      return 0;
    });
    setIronContacts(nameSortedArray);
  }

  function sortByPopularity() {
    const popularitySortedArray = structuredClone(ironContacts);
    popularitySortedArray.sort((a, b) => b.popularity - a.popularity);
    setIronContacts(popularitySortedArray);
  }

  function deleteContact(contactId) {
    const newArray = ironContacts.filter((elm) => {
      if (elm.id === contactId) {
          return false;
      } else {
          return true;
      }
  })
  setIronContacts(newArray)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContacts}>Add Random Contacts</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        
        <tbody>
        {ironContacts.map((elm) => {
        return(
          <tr key = {elm.id}>
            <td>
              <img src={elm.pictureUrl}/>
            </td>
            <td>
              {elm.name}
            </td>
            <td>
              {Math.round(elm.popularity*100)/100}
            </td>
            <td>
              {elm.wonOscar ? <p>&#127942;</p> : '' }
            </td>
            <td>
              {elm.wonEmmy ? <p>&#127775;</p> : '' }
            </td>
            <td>
              <button onClick = {() => deleteContact(elm.id)}>&#10060;</button>
            </td>
          </tr>
        );
      })}
        </tbody>
      
      </table>
      
    </div>
  );
}

export default App;