import { useState } from "react";
import "./App.css";
import { Fragment } from "react";
import contacts from "./contacts.json";

function App() {
  const [listContacts, setListContacts] = useState(contacts.slice(0, 5));
  return (
    <div>
      {listContacts.map((contact, index) => {
        return (
          <Fragment key={index}>
            <img style={{ width: "10%" }} src={contact.pictureUrl} alt="" />
            <h1>name: {contact.name}</h1>;
            <h1>Popularity{contact.popularity}</h1>
          </Fragment>
        );
      })}
      ;
    </div>
  );
}

export default App;
