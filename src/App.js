import React from "react";
import contacts from "./contacts.json";
import "./App.css";

// to get only the first 5 contacts from contacts
const initialContacts = contacts.slice(0, 5);

function App() {
  const [contactSlate, setContactSlate] = React.useState(initialContacts);
  // preparing table elements
  const contactList = () =>
    contactSlate.map((contact) => {
      return (
        <tr key={contact.id}>
          <td>
            <img style={imgStyle} src={contact.pictureUrl} alt={contact.name} />
          </td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
        </tr>
      );
    });

  // styling for the table
  const tableStyle = {
    borderCollapse: "collapse",
    width: "80%",
    margin: "0 10%",
  };
  const imgStyle = {
    height: "150px",
  };
  return (
    <div className="App">
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>{contactList()}</tbody>
      </table>
    </div>
  );
}

export default App;
