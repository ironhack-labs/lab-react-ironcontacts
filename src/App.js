import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import contactData from "../src/contacts.json"

function App() {

  const [contacts, setcontacts] = useState(contactData.slice(0,5))
  
  const randomMovie = ()=>{
    let randomx= contactData[Math.floor(Math.random()*contactData.length)]
     setcontacts([randomx, ...contacts])
  }

const sortName = ()=>{
  
  let name = [...contacts.sort((a,b)=>{
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  })]
  setcontacts(name)
}

const sortPop = () =>{
  let pop = [...contacts.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1)]
  setcontacts(pop)
}

const deleteName = (personId) => {
  const filtered = contacts.filter((contact) => {
    return contact.id !== personId;
  })
  setcontacts(filtered);
};
  return (

    
    <div className="App">
      <h1>
        IronContacts
      </h1>
      <div className='btnsDiv'>
      <button onClick={()=>randomMovie()}>Add Random Contact</button>
      <button onClick={()=>sortPop()}>Sort by popularity</button>
      <button onClick={()=>sortName()}>Sort by name</button>
      </div>
      <table>
        <tr className='rows'>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>
        {contacts.map((element) => {
        return (<tr className='rows' key={element.id}>
          <td><img src={element.pictureUrl} alt="picture" /></td>
          <td>{element.name}</td>
          <td>{element.popularity.toFixed(2)}</td>
         <td>{element.wonOscar && <td>🏆</td> }</td>
         <td>{element.wonEmmy && <td>🏆</td> }</td>
         <td><button onClick={()=>deleteName(element.id)}>Delete</button></td>

        </tr> )
        
      })}
        
      </table>
    </div>
  );
}

export default App;
