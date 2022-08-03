import logo from './logo.svg';
import './App.css';
import contactsData  from "./contacts.json"
import { useState } from 'react';


function App() {


const newContracts= contactsData.slice(0,5)
const randomContacts = contactsData.slice(6,contactsData.length)

const random = randomContacts[Math.floor(Math.random()* randomContacts.length)]
console.log(random)


const [contacts,setContacts] = useState(newContracts)

function handleClick(){

  setContacts(prev=>[...prev,random])
 
}




  return (
    <div className="App">

      <div>
      <div><br/>
        <button className='btn btn-outline-secondary  p-1 m-2' onClick={handleClick} type="submit"  >Add Random Contact</button>
        <button className='btn btn-outline-secondary p-1 m-2'  type="submit"  >Sort by popularity</button>
        <button className='btn btn-outline-secondary p-1 m-2'  type="submit"  >Sort by name</button><br/>
      </div>
      <h1>IronContacts</h1>
        <table className='table'>
          <thead>
          <tr>
              <td className='fw-bold fs-5'>Picture</td>
              <td className='fw-bold fs-5'>Name</td>
              <td className='fw-bold fs-5'>Popularity</td>
              <td className='fw-bold fs-5'>Won Emy</td>
              <td className='fw-bold fs-5'>Won Oscar</td>
              
          </tr>
        </thead>
        
        {contacts.map((contact)=>{
          return(
          <tbody>
          <tr>
          <td><img src={contact.pictureUrl} width={100} height={150}></img></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          {contact.wonEmmy ? <td>🏆</td> : <td> ❌</td>}
          {contact.wonOscar ? <td>🏆</td> : <td> ❌</td>}
        </tr>
        </tbody>
        )
        })}
          
         
      
        </table>
      </div>





     
    </div>
  );
}

export default App;
