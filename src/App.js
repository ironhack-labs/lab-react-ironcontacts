import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

function FirstFive(){
    // const firstFive = contacts.slice(0, 5)
    const [contacts, setContacts] = useState(contacts.slice(0, 5))

    return (
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {contacts.map(contact => <Table key={contact.id} {...contact} name={contact.name} popularity={contact.popularity}/>        
      </table>
    )

}

function Table({name, popularity, pictureUrl}){
  return (
    <tr>
        <td><img src={pictureUrl}/></td>
        <td>{name}</td>
        <td>{popularity}</td>
    </tr>
  )
}




function App() {
  return (
    <div className="App">
     <h1>IronContacts</h1>
     <FirstFive/>
    </div>
  );
}

export default App;
