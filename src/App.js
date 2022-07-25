import './App.css';
import React, {useState} from 'react'
import contacts from './contacts.json'

const firstFive = contacts.slice(0,5) //returns selected array elements as a new array
function App() {
  const [contacts, setContacts] = useState(firstFive)
  const addContact=()=>{
    let randomIndex = Math.floor(
      Math.random()*contacts.length)
      let randomContact=contacts [randomIndex]
      setContacts([randomContact, ...contacs])
    }
    
  
  return (
    <div className="App">
      <h1>IRON-CONTACS</h1>
        <button>onClick = {addContact} Add Random Contact </button> {/* iteration 3 & line 8*/}
        <button>onClick = {()=>setContacts()} > Sort by popularity </button>{/*iteration 4*/}
        <button>onClick = {()=>setContacts()} > Sort by name </button>{/*iteration 4*/}
      <br></br>{/*line break*/}
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won<br></br>Oscar </th>
              <th>Won<br></br>Emmy </th>
              <th>Actions</th>
            </tr>
          </thead>
          
          <tbody>
            {contacts.map(element =>{
              return (
                <tr>
                  <td><img className="celi" src={element.pictureUrl} alt=""/></td> {/*Check*/}
                    <td>{element.name}</td>
                    <td>{element.popularity}</td>
                    <td>{element.wonOscar ? '🏆' : null}</td> {/*iteration 2*/}
                    <td>{element.wonEmmy ? '🏆' : null}</td> {/*iteration 2*/}
                    <button onclick={()=>setContacts(contacts._id)}
                    className="btn-delete">DELETE</button> {/*iteration 5*/}

                </tr>
              )
            })}
          </tbody>
        </table>
      
    </div>
  );
}

export default App;
