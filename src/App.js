import './App.css';
import contacts from './contacts.json';
import FirstFiveContacts from './firstFiveContacts.js';
import Button from './Button.js';


function App() {

  return (
    <div className="App">
      <Button />
      <FirstFiveContacts />
      
    </div>

  );
}


// let contacts
// this.state = { contacts }

// const newContacts = this.state.contacts.slice(0, 5);
// console.log(newContacts)

// this.setState({
//   contacts: newContacts
// })






export default App;
