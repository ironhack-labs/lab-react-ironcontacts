import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";


// const firstIteration = [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
// console.log("first Iteration content =", firstIteration)


function App() {

  const firstIteration = contacts.slice(0, 5);

  const [contactsInfo, setContacts] = useState(firstIteration);

  console.log("contacts info", contactsInfo)

  console.log("first Iteration content =", firstIteration)

  function addRandomContact() {
    const remainingContacts = contacts.filter(contact => contactsInfo.indexOf(contact) === -1)
    let num = Math.floor(Math.random() * remainingContacts.length);
    const contactsCopy = contactsInfo.slice()
    contactsCopy.push(remainingContacts[num])
    setContacts(contactsCopy)
  }

  function sortByPop(){
    const contactsCopy = contactsInfo.slice()
    contactsCopy.sort(function(a,b) {return a.popularity - b.popularity})
    setContacts(contactsCopy)
  }
  function sortByName() {
    const contactsCopy = contactsInfo.slice()
    contactsCopy.sort(function(a,b) {return a.name.localeCompare(b.name)})
    setContacts(contactsCopy)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={function () { addRandomContact() }}>ADD Random Contact</button>
      <button onClick={function () { sortByPop() }}>Sort by popularity</button>
      <button onClick={function () { sortByName() }}>Sort by name</button>
      <table className="actorsTable">
        <thead>
          <tr>
            <th className="picture">Picture</th>
            <th className="widthOne">Name</th>
            <th className="widthOne">Popularity</th>
            <th className="widthTwo">Won Oscar</th>
            <th className="widthTwo">Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactsInfo.map((el) => {
            return (
              <tr key={el.id}>
                <td className="picture"><img src={el.pictureUrl} alt="picture" /></td>
                <td className="widthOne"><h2>{el.name}</h2></td>
                <td className="widthOne"><p>{el.popularity.toFixed(2)}</p></td>
                <td className="widthTwo">{el.wonOscar && <p>🏆</p>}</td>
                <td className="widthTwo">{el.wonEmmy && <p>🏆</p>}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
