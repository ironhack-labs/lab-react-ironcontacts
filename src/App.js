import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

function FirstFive(){
    const firstFive = contacts.slice(0, 5)
    const [contacts, setContacts] = useState(firstFive)

    return (
      <table>

      </table>
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
