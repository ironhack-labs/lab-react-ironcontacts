import React, { useState } from "react";
import Contacts from "/src/contacts.json";
import styled from "styled-components";

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

const Buttonrandom = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const Celebrity = ({ picture, name, popularity }) => {
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

export const Celebrities = () => {
  const [contactsList, setContacts] = useState(Contacts.slice(0, 5));

  const randomButton = () =>
    Contacts[Math.floor(Math.random() * Contacts.length)];

  const addRandom = () => {
    const copyContacts = [...contactsList];
    const newContacts = randomButton();

    while (contactsList.includes(newContacts)) {
      newContacts = randomButton();
    }
    copyContacts.push(newContacts);
    setContacts(copyContacts);
  };

  return (
    <div>
      <div>
        <Buttonrandom onClick={addRandom}>Add Random Contact</Buttonrandom>
      </div>

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
            {contactsList.map((e, i) => (
              <Celebrity
                picture={e.pictureUrl}
                name={e.name}
                popularity={e.popularity}
                key={i}
              />
            ))}
          </tbody>
        </table>
      </Tablestyle>
    </div>
  );
};
