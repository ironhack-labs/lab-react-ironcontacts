import React, { useState } from "react";
import styled from "styled-components";
import Contact from "./ListItem";
import Header from "./ListItem";
import contacts from "../../src/contacts.json";

const ContactTable = styled.table`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: color-interpolation-filters;
`;

const Btn = styled.button`
  display: block;
  color: #000000;
  background: #61dafb;
  border-radius: 5px;
  padding: 15px;
  font-size: 16px;
  outline: none;
  border: 0px;
  cursor: pointer;
  &:hover {
    transition: all 0.5s;
    color: #61dafb;
    background: #282c34;
  }
`;

const List = () => {
  const originList = contacts.slice(0, 5);
  const [list, setList] = useState(originList);

  const getRamdomContact = e => {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];
    setList([...list, newContact]);
  };

  return (
    <div className="App-wrapper">
      <h1>Iron contacts</h1>
      <Btn onClick={getRamdomContact}>Add Random Contact</Btn>
      <ContactTable>
        <thead>
          <Header>
            <td>
              <h2>Picture</h2>
            </td>
            <td>
              <h2>Name</h2>
            </td>
            <td>
              <h2>Popularity</h2>
            </td>
          </Header>
        </thead>
        <tbody>
          {list.map((contact, i) => (
            <Contact key={i}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name}></img>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
            </Contact>
          ))}
        </tbody>
      </ContactTable>
    </div>
  );
};

export default List;
