import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json"

function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0, 5))
  const [remainingContacts, setRemainingContacts] = useState(contactsData.filter((elem)=>!contacts.includes(elem)))

  const randomContact = ()=>{
    if (remainingContacts.length > 0){
      let index = Math.floor(Math.random() * remainingContacts.length)
      setContacts([remainingContacts[index], ...contacts])
      let clone = structuredClone(remainingContacts)
      clone.splice(index, 1)
      setRemainingContacts(clone)
    }
  }

  const sortBy = (key)=>{
    let clone = structuredClone(contacts)
    clone.sort((a, b)=> {
      if (key === 'name'){
        return (a.name.localeCompare(b.name))
      }
      else{
        return (b[key] - a[key])
      }
    })
    setContacts(clone)
  }

  const handleDelete = (id)=>{
    let clone = structuredClone(contacts)
    clone = clone.filter((elem)=>elem.id !== id)
    setContacts(clone)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <hr />
      <button onClick={randomContact}>Random</button>
      <button onClick={()=>sortBy("popularity")}>Sort by Popularity</button>
      <button onClick={()=>sortBy("name")}>Sort by Name</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((elem)=>
            <tr key={elem.id}>
              <td><img src={elem.pictureUrl} alt="" style={{height:'150px'}}/></td>
              <td>{elem.name}</td>
              <td>{elem.popularity}</td>
              <td>{elem.wonOscar && '🏆'}</td>
              <td>{elem.wonEmmy  && '🌟'}</td>
              <td><button onClick={()=>handleDelete(elem.id)}>🗑️</button></td>
            </tr>
            )
          }
        </tbody>
        </table>
    </div>
  );
}

export default App;
