import { useState } from "react";
import './Table.css';

function Table({ props }) {

  const [contacts, setContacts] = useState(props.slice(0, 5));
  const [restOfContacts, setRestOfContacts] = useState(props.slice(5, props.length));


  function randomContact() {
    const remainingContacts = [...restOfContacts];
    let randomNum = Math.floor(Math.random() * restOfContacts.length);
    let removeContact = remainingContacts.splice(randomNum, 1)[0];
    const updatedContacts = [removeContact, ...contacts];

    setContacts(updatedContacts);
    setRestOfContacts(remainingContacts);
  }

  function sortByPopularity() {
    const copyOfContacts = [...contacts];
    const sortedContacts = copyOfContacts.sort(
      (a, b) => b.popularity - a.popularity );
    
    setContacts(sortedContacts);
  }

  function sortByName() {
    const copyOfContacts = [...contacts];
    const sortedContactsByName = copyOfContacts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    setContacts(sortedContactsByName);
  }

  function deleteContact(id) {
    const copyOfContacts = [...contacts];
    const arrayFiltered = copyOfContacts.filter((element) => element.id !== id);

    setContacts(arrayFiltered);
  }

  const contentTable = contacts.map((element, index) => (
    <tr key={index} className="table-row">
      <td><img src={element.pictureUrl} className="contacts-image"/></td>
      <td>{element.name}</td>
      <td>{element.popularity}</td>
      <td>{element.wonOscar ? '🏆':''}</td>
      <td>{element.wonEmmy ? '🌟':''}</td>
      <td><button onClick={() => deleteContact(element.id)} className="btn btn-danger m-2">Delete</button></td>
    </tr>
  ))

  return (
    <div>
      <button onClick={() => randomContact()} className="btn btn-success m-2">New Contact</button>
      <button onClick={() => sortByPopularity()} className="btn btn-success m-2">Sort By Popularity</button>
      <button onClick={() => sortByName()} className="btn btn-success m-2">Sort By Name</button>

      <table className="table">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th scope="col">Won an Oscar</th>
              <th scope="col">Won an Emmy</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {contentTable}
          </tbody>
        </table>
    </div>
  );
}


export default Table;
