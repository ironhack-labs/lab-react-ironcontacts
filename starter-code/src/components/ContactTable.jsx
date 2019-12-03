import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import contactJson from "../contacts.json";

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts([...contactJson].splice(0, 4));
  }, []);
  
  const addRandomContact = () => {
    const rndIx = Math.floor(Math.random() * contactJson.length);
    setContacts([contactJson[rndIx], ...contacts]);
  }

  const sortByName = () => {
    const sortedArr = [...contacts].sort((a, b) => {
      if(a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });
    setContacts(sortedArr);
  }

  const sortByPop = () => {
    const sortedArr = [...contacts].sort((a, b) => {
      if(a.popularity < b.popularity) {
        return -1;
      } else {
        return 1;
      }
    });
    setContacts(sortedArr);
  }

  return (
    <div className="container-fluid">
      <Button onClick={addRandomContact}>Add Random Contact</Button>
      <Button onClick={sortByName} className="ml-2">Sort by Name</Button>
      <Button onClick={sortByPop} className="ml-2">Sort by Popularity</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(cont => (
            <tr key={cont.id}>
              <td>
                <img src={cont.pictureUrl} width="100"/>
              </td>
              <td>{cont.name}</td>
              <td>{cont.popularity.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ContactTable;
