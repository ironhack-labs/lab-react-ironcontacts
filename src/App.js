import "./App.css";
import actors from "./contacts.json";
import { useState } from "react";

const firstArr = [...actors];
const myArr = firstArr.slice(0,5);
firstArr.splice(0,5);

function App() {

  const [contacts, setContacts] = useState(myArr)

  const getRandom = () => {
    if(firstArr.length > 0){
      const copy =[...contacts];
      const randomNum = Math.floor(Math.random()*firstArr.length);
      const randomContact = firstArr.splice(randomNum, 1);
      copy.unshift(randomContact[0]);
      setContacts(copy);
    }
  }
  const sortName = () => {
    const copy = [...contacts];
    copy.sort((a, b) => {
      if(a.name > b.name){
        return 1;
      }
      if(a.name < b.name){
        return -1;
      }
      return 0;
    });
    setContacts(copy);
  }
  const sortPopularity = () => {
    const copy = [...contacts];
    copy.sort((a, b) => {
      if(a.popularity > b.popularity){
        return -1;
      }
      if(a.popularity < b.popularity){
        return 1;
      }
      return 0;
    })
    setContacts(copy);
  }
  const deleteContact = (id) => {
    const copy = [...contacts];
    const newCopy = copy.filter((contact) => id !== contact.id)
    setContacts(newCopy);
  }

  return (
  <div className="App">
  <h1>Iron Contacts</h1>
    <div>
      <button className="button-one" onClick={getRandom}>Add random contact</button>
      <button className="button-one" onClick={sortName}>Sort by name</button>
      <button className="button-one" onClick={sortPopularity}>Sort by popularity</button>
    </div>
    <div className="tablediv">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map( element => {
            return (
              <tr key={element.id}>
                <td><img src={element.pictureUrl} alt="" /></td>
                <td>{element.name}</td>
                <td>{element.popularity}</td>
                {element.wonOscar ? <td>🏆</td> : <td></td>}
                {element.wonEmmy ? <td>🏆</td> : <td></td>}
                <td><button className="button-two" onClick={() => {deleteContact(element.id)}}>Delete</button></td>
              </tr>
            )
          })}        
        </tbody>
    </table>
    </div>

  </div>
  )

}

export default App;