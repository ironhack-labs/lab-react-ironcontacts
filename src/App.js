import { useState } from 'react';
import './App.css';
import contactsFromJSON from "./contacts.json"

function App() {
  const contacts = contactsFromJSON.slice(0, 5);
  
  const [contactArr, setContactArr] = useState(contacts);

  
  let newListOfContact = contactArr;
  let randomNumberArr = [];
  const newRandomContact = () => {
    console.log(newListOfContact);
    
    let randomNumber = Math.floor(Math.random()*(contactsFromJSON.length - 4) + 5);
    randomNumber = Number(randomNumber);

    newListOfContact.push(contactsFromJSON[randomNumber])
    setContactArr([...contactArr, newListOfContact]);

    if(!randomNumberArr.includes(randomNumber)) {
      randomNumberArr.push(randomNumber);
      return randomNumber;
    }
    
  }
  
  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={()=>newRandomContact()}>Add Random Contact</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactArr.map((contactDetails) => {
            return (
              <tr key={contactDetails.id} className="table">
                <td><img src={contactDetails.pictureUrl} alt="" /></td>
                <td>{contactDetails.name}</td>
                <td>{contactDetails.popularity}</td>
                <td>{contactDetails.wonOscar? "🏆":""}</td>
                <td>{contactDetails.wonEmmy? "🏆":""}</td>
              </tr>
            )
          })}
        </tbody>
      </table>





    </div>
  );
}

export default App;
