import contacts from "../contacts.json";
import "../App.css";

import React, { useState } from "react";

function CreateContact() {
  const [contactinfo, updatecontact] = useState(contacts.slice(0, 5));
  console.log(contactinfo);

  const AddRandom = () => {
    let randomIndex = Math.floor(Math.random() * contacts.length);
    let randomElement = contacts[randomIndex];

    updatecontact([randomElement, ...contactinfo]);
  };

  const SortByName = () => {
    let cloneContact = JSON.parse(JSON.stringify(contactinfo));

    cloneContact.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    updatecontact(cloneContact);
  };

  const SortByPop = () => {
    let cloneContact = JSON.parse(JSON.stringify(contactinfo));

    cloneContact.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      } else if (a.name < b.name) {
        return 1;
      } else {
        return 0;
      }
    });

    updatecontact(cloneContact);
  };

  const DeleteContact = (index) => {
    let filteredcontact = contactinfo.filter((contact, i) => {
      return i !== index;
    });

    // Update the state so that the page re-renders
    // calling `updateStudents` will internally update the state `students`
    updatecontact(filteredcontact);
  };

  return (
    <div>
      <h1>Iron contact </h1>
      <button onClick={AddRandom}>Add random contact</button>
      <button onClick={SortByName}>SortByName</button>
      <button onClick={SortByPop}>SortByPop</button>

      {contactinfo.map((contact, i) => {
        return (
          <div className="container" key={i}>
            <ul className="box">
              <li>
                <img className="image" src={contact.pictureUrl}></img>
              </li>
              <li className="name">{contact.name}</li>
              <li className="pop">{contact.popularity}</li>
              <li>
                <button
                  onClick={() => {
                    DeleteContact(i);
                  }}
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default CreateContact;
