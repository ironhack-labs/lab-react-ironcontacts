import logo from './logo.svg';
import './App.css';
import React from 'react'

const ContactsTable = ({contacts, deleteId}) => {
  return(
    <table>
      <tr>
        <th> Picture </th>
        <th> Name </th>
        <th> Popularity</th>
      </tr>
      {contacts.map((c)=>(
        <tr>
        <td> <img src={c.pictureUrl}></img>  </td>
        <td> {c.name} </td>
        <td> {c.popularity}</td>
        <td> <button onClick={() => deleteId(c.id)}>Delete</button></td>
      </tr>
        
      ))}


    </table>
  )
}


function App(props) {
  const initialState = props.contacts.slice(0,5)
  const [contacts, setContacts] = React.useState(initialState)
  
  const updateContacts = () => {  
    const randomContactIndex = Math.floor(Math.random()*props.contacts.length)

    const newContacts = [...contacts]
    const randomContact = props.contacts[randomContactIndex]
    if(!newContacts.includes(randomContact)){
      newContacts.push(randomContact)
    }

    
    setContacts(newContacts)
  }

  const sortName = () => {  
   
    const newContacts = [...contacts].sort((a,b)=> a.name.charCodeAt(0)-b.name.charCodeAt(0))

    
    setContacts(newContacts)
  }

  const sortPopularity = () => {  
   
    const newContacts = [...contacts].sort((a,b)=> a.popularity-b.popularity)


    
    setContacts(newContacts)
  }

  const deleteContact = (deleteId) => {
    const newContacts = [...contacts].filter(({id}) => deleteId !== id)

    setContacts(newContacts)
  }

  return (
    <div className="App">
      <button 
      onClick={()=> updateContacts()}> Add Random Contact
      </button>
      
      <button
      onClick={()=>sortName()}>Sort by Name
      </button>

      <button
      onClick={()=>sortPopularity()}>Sort by Popularity
      </button>

      <ContactsTable deleteId={deleteContact} contacts={contacts}/>
      
    </div>
  );
}

export default App;
