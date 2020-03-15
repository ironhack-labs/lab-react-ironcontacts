import React, { useState } from "react";
import contacts from "/src/contacts.json";
import styled from "styled-components";

const initList = contacts.slice(0, 5);

const Tablestyle = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 100%;
  }
  th {
    word-spacing: 100vw;
    width: 5vw;
  }
`;

const Contact = ({ picture, name, popularity }) => {
  return (
    <tr>
      <th>
        <img src={picture} alt={name} />
      </th>
      <th>{name}</th>
      <th>{popularity.toFixed(2)}</th>
      <th></th>
    </tr>
  );
};

export const Contacts = () => {
  const [contacts, setContacts] = useState(initList);

  return (
    <Tablestyle>
      <table>
        <tbody>
          <tr>
            <th>
              <h3>Picture</h3>
            </th>
            <th>
              <h3>Name</h3>
            </th>
            <th>
              <h3>Popularity</h3>
            </th>
            <th>
              <h3>Action</h3>
            </th>
          </tr>

          {contacts.map((e, i) => (
            <Contact
              picture={e.pictureUrl}
              name={e.name}
              popularity={e.popularity}
              key={i}
            />
          ))}
        </tbody>
      </table>
    </Tablestyle>
  );
};
