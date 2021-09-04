import React from "react";
import "./Contacts.css";

import contactsList from "../contacts.json";

const INITIAL_STATE = [...contactsList.splice(0, 4)];

const removeButton = (id, contact) => {
  let removedPersonIndex;
  //GETS REMOVED PERSON AND HIS INDEX -START
  const removedPerson = contact.filter((people, i) => {
    if (people.id === id) {
      removedPersonIndex = i;
      return true;
    }
    return false;
  })[0];
  //GETS REMOVED PERSON AND HIS INDEX -END
  contactsList.push(removedPerson);
  contact.splice(removedPersonIndex, 1);
  return contact;
};

const retrieveLine = (contact, setContact) => {
  return contact.map((people) => (
    <tr key={people.id}>
      <td>
        <img src={people.pictureUrl} alt="contact person" />
      </td>
      <td className="is-vcentered">{people.name}</td>
      <td className="is-vcentered">{people.popularity.toFixed(2)}</td>
      <td className="is-vcentered">
        <button
          className="button"
          onClick={() => setContact([...removeButton(people.id, contact)])}
        >
          Remove
        </button>
      </td>
    </tr>
  ));
};

const addContact = () => {
  const randomIndex = Math.floor(contactsList.length * Math.random());
  return contactsList.splice(randomIndex, 1)[0];
};

const sortByName = (contacts) => {
  return contacts.sort((contactA, contactB) =>
    contactA.name > contactB.name ? 1 : -1
  );
};

const sortByPopularity = (contacts) => {
  return contacts.sort(
    (contactA, contactB) => contactB.popularity - contactA.popularity
  );
};

const Contacts = () => {
  const [contact, setContact] = React.useState(INITIAL_STATE);

  return (
    <div className="contacts-container">
      <h3>Iron Contacts</h3>
      <button
        className="button add"
        onClick={() =>
          contactsList.length > 0
            ? setContact([...contact, addContact()])
            : window.alert("A lista de atores está vazia! ='(")
        }
      >
        Add Random Contact
      </button>
      <div className="other-buttons">
        <button
          className="button sort-name"
          onClick={() =>
            contact.length > 0 ? setContact([...sortByName(contact)]) : null
          }
        >
          Sort by Name
        </button>
        <button
          className="button sort-popularity"
          onClick={() =>
            contact.length > 0
              ? setContact([...sortByPopularity(contact)])
              : null
          }
        >
          Sort by Popularity
        </button>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>pularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>pularity</th>
              <th>Action</th>
            </tr>
          </tfoot>
          <tbody>{retrieveLine(contact, setContact)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
