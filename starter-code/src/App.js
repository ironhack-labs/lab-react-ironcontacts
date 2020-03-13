import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Item } from "./components/item";
import contacts from "./contacts.json";
import { Title } from "./components/title";
import styled from "styled-components";

const Intro = styled.h1`
  color: #fffcf9;
  font-family: "Major Mono Display";
  font-size: 4rem;
  ::selection {
    background: #91c499;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1240px;
`;

const Buttons = styled.div`
  color: #fffcf9;
  display: flex;
  align-self: center;
  background-color: #91c499;
  width: 90%;
  margin: 5px;
  justify-content: space-around;
`;

const Filter = styled.button`
  color: #fffcf9;
  font-family: "Major Mono Display";
  font-size: 1.2rem;
  padding: 0 auto;
  background: rgba(0, 0, 0, 0);
  border: none;
  padding: 5px;
  &:hover {
    cursor: pointer;
    color: #fcdebe;
  }
`;

const n = 5;
const data = contacts.slice(0, n);

export const App = () => {
  const [displayedContacts, setState] = useState(data);

  const addRandom = () => {
    const newContacts = [...displayedContacts];

    // never choose a contact that is rendered
    let randomContact;
    do {
      randomContact = contacts[Math.floor(Math.random() * contacts.length)];
      console.log(contacts);
    } while (newContacts.indexOf(randomContact) > -1);

    /*
    contacts.splice(contacts.indexOf(randomContact), 1); // this is another aproach but changing the contacts array
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    */
    newContacts.push(randomContact);
    setState(newContacts);
  };

  const sortName = () => {
    const newContacts = [...displayedContacts];
    newContacts.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });
    setState(newContacts);
  };

  const sortPopularity = () => {
    const newContacts = [...displayedContacts];
    newContacts.sort((a, b) => {
      return a.popularity > b.popularity ? -1 : 1;
    });
    setState(newContacts);
  };

  const handleDelete = index => {
    const newContacts = [...displayedContacts];
    newContacts.splice(index, 1);
    setState(newContacts);
  };

  return (
    <Wrapper>
      <Intro>IRONCONTACTS</Intro>
      <Buttons>
        <Filter onClick={() => addRandom()}>Add a random contact</Filter>
        <Filter onClick={() => sortName()}>Sort by name</Filter>
        <Filter onClick={() => sortPopularity()}>Sort by popularity</Filter>
      </Buttons>
      <Title></Title>
      {displayedContacts.map((e, i) => (
        <Item
          key={e.id}
          name={e.name}
          pictureUrl={e.pictureUrl}
          popularity={e.popularity}
          setDelete={index => handleDelete(index)}
          index={i}
        ></Item>
      ))}
    </Wrapper>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
