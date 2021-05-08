import React from "react";
import contacts from "./contacts.json";
import "./App.css";
import Contact from "./Components/Contact";

const contactList = contacts.slice(0, 5);

function App() {
  return (
    <div>
      {contactList.map((contact) => {
        return (
          // with key={contact.id}
          <div className="App">
            <h1>IronContacts</h1>
            <table>
              <tr>
                <th>PICTURE</th>
                <th>NAME</th>
                <th>POPU</th>
              </tr>
              <tr>
                <th>
                  <img src={contact.pictureUrl} />
                </th>
                <th>{contact.name}</th>
                <th>{Math.round(contact.popularity * 100) / 100}</th>
              </tr>
            </table>
            {/* <Contact {...contact} /> */}
          </div>
        );
      })}
    </div>
  );
}

export default App;
