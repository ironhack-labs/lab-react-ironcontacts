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

const Btn = styled.a`
  display: inline-block;
  color: #000000;
  background: #61dafb;
  border-radius: 5px;
  padding: 15px;
  font-size: 16px;
  outline: none;
  border: 0px;
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    transition: all 0.5s;
    color: #61dafb;
    background: #282c34;
  }
`;

export const List = () => {
  const [list, setList] = useState(contacts.slice(0, 5));

  const addRamdomContact = e => {
    e.preventDefault();
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];
    list.includes(newContact)
      ? addRamdomContact()
      : setList([...list, newContact]);
  };
  const sortByName = e => {
    e.preventDefault();
    const sortedList = [...list].sort((a, b) => a.name.localeCompare(b.name));
    setList(sortedList);
  };

  const sortByPopularity = e => {
    e.preventDefault();
    const sortedList = [...list].sort((a, b) => a.popularity - b.popularity);
    setList(sortedList);
  };

  return (
    <div className="App-wrapper">
      <h1>Iron contacts</h1>
      <Btn onClick={addRamdomContact}>Add Random Contact</Btn>
      <Btn onClick={sortByName}>Order By Name</Btn>
      <Btn onClick={sortByPopularity}>Order By Popularity</Btn>
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
