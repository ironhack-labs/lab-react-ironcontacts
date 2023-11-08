import { useState } from "react";
import "./App.css";
import contactList from './contacts.json';

function App() {

// first 5 objects
let reducedContacts = [];
contactList.forEach((contact, i)=>{
  if (i < 5) {
    reducedContacts.push(contact);
  }
})

//useState() deconstruction of array
const [updatedContracts, setUpdatedContacts] = useState(reducedContacts);
// random button onClick activity
function addRandomRow() {
// remove first 5 items from big list
let filteredContacts = contactList.slice(5)
// finding a random line and adding it to the contacts

let randomer = Math.floor(Math.random() * filteredContacts.length)
// push is gonna edit original reducedContact so we need a copy;
let newList = [...updatedContracts]
// finding a random line and adding it to the contacts 
newList.push(filteredContacts[randomer]);
// remove previous added random object so it won't grow over 6
if (newList.length > 6) {
  newList.splice(5, 1);
}
// reducedContact stayed with original 5 element, newList have random content
setUpdatedContacts(newList)
}


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <h2>Contact list have {updatedContracts.length} person</h2>
      <button onClick={()=>{addRandomRow()}}>Add Random Contact</button>
      <button onClick={()=>{sortByPopularity()}}>Sort By Popularity</button>
      <button onClick={()=>{sortByName()}}>Sort By Name</button>
      <table>
        <thead>
        <tr key={"row"}>
          <th><h2>Picture</h2></th>
          <th><h2 >Name</h2></th>
          <th><h2> Popularity</h2></th>
          <th><h2> Won<br />Oscar</h2></th>
          <th><h2> Won<br />Emmy</h2></th>
          <th><h2> Actions</h2></th>
        </tr>
        </thead>
        <tbody>
        {updatedContracts.map((object,i)=>{
          return(
            <tr key={i}>
          <th><img src={object.pictureUrl} alt="" /></th>
          <th>{object.name}</th>
          <th>{Math.round(object.popularity *100)/100 }</th>
          <th><h2>{object.wonOscar ? '🏆' : false}</h2></th>
          <th><h2>{object.wonEmmy ? '🌟' : false}</h2></th>
          <th><button>Delete</button></th>
          </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
