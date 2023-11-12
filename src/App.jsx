import { useState } from "react";
import "./App.css";
import contacts from './contacts.json'

function App() {
  
  const [firstFiveContacts, setFirstFiveContacts] = useState(contacts.slice(0, 5))
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5))

  const addRandomContact = function (element) {
    let randomIndex = Math.floor(Math.random() * (remainingContacts.length));
    const newContactArray = [remainingContacts[randomIndex], ...firstFiveContacts]
    const updatedRemainingcontacts = [...remainingContacts.filter(item => item !== remainingContacts[randomIndex])]

    setFirstFiveContacts(newContactArray)
    setRemainingContacts(updatedRemainingcontacts)
  }; 
  
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button className="myButton" onClick={ () => {  addRandomContact()}}>
        Add new contact
      </button>

      <table className="contactTable">
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
          {firstFiveContacts.map(function (contactInfo) {
            return (
              <tr key={contactInfo.id}>
                <td><img src={contactInfo.pictureUrl} /></td>
                <td>{contactInfo.name}</td>
                <td>{contactInfo.popularity.toFixed(2)}</td>
                <td>{contactInfo.wonOscar && <p>TROPHY</p>}</td>
                <td>{contactInfo.wonEmmy && <p>STAR</p>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
