import './App.css';
import { useState } from 'react';
import contactsJson from './contacts.json'

function App() {
  const [contacts, setContacts]=useState(contactsJson.slice(0,5))
  const [contactsLength, setContactsLength] = useState(4)

  function addRandom(){
    let contactsCopy = [...contactsJson];
    const randomContact =Math.floor(Math.random()*(contactsCopy.length-5)+5)
    contactsCopy.push(contactsCopy[randomContact])
    setContactsLength(contactsLength+1)
    setContacts(contactsCopy.slice(0,contactsLength))
  }
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={function(){addRandom()}}>Add a Random Contact</button>
      <table> 
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won an Oscar</td>
            <td>Won an Emmy</td>
          </tr>
        </thead>      
        {
          contacts.map(el => {
            return(
              <tr>
                <td><img src={el.pictureUrl} alt='pictureImg'/></td>
                <td>{el.name}</td>
                <td>{Math.round(el.popularity*100)/100}</td>
                <td>{el.wonOscar && '🏆'}</td>
                <td>{el.wonEmmy && '🏆'}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;
