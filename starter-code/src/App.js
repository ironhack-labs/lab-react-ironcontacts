import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Item from "./components/item";
import Title from "./components/titleOfContacts";

const NumberOfContacts = 5;

const Contacts = contacts.slice(0, NumberOfContacts);

const App = () => {
  const [displayedContacts, setState] = useState(Contacts);

  const random = () => {
    const newContact = [...displayedContacts];
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    newContact.push(randomContact);
    setState(newContact);
  };
  const sortName = () => {
    const newContact = [...displayedContacts];
    newContact.sort((a, b) => a.name.localeCompare(b.name));
    console.log(newContact);
    setState(newContact);
    console.log("hola");
  };

  const sortPopularity = () => {
    const newContact = [...displayedContacts];
    console.log(newContact.popularity);
    newContact.sort((a, b) => a.popularity - b.popularity);
    console.log(newContact);
    setState(newContact);
    console.log("adios");
  };

  const deleteContact = id => {
    const newContact = [...displayedContacts];
    newContact.splice(id, 1);
    setState(newContact);
  };

  return (
    <div>
      <h1>IronContacts</h1>
      <div className="container">
        <button onClick={() => random()}>Add Random Contact</button>
        <button onClick={() => sortName()}>Sort By Name</button>
        <button onClick={() => sortPopularity()}>Sort By Popularity</button>
      </div>
      <Title />
      {displayedContacts.map((e, id) => (
        <Item
          key={e.id}
          name={e.name}
          pictureUrl={e.pictureUrl}
          popularity={e.popularity.toFixed(2)}
        />
      ))}
    </div>
  );
};

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
