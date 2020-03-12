import React from "react";
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

const List = () => {
  return (
    <div className="App-wrapper">
      <h1>Iron contacts</h1>
      <ContactTable>
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
        {contacts.slice(0, 5).map((contact, i) => (
          <Contact key={i}>
            <td>
              <img src={contact.pictureUrl} alt={contact.name}></img>
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
          </Contact>
        ))}
      </ContactTable>
    </div>
  );
};

export default List;
