import React, { Component } from "react";
import contactsJson from "../../contacts.json";
import "./Table.css";

const copyOfJson = [...contactsJson]; // importante, hacer copia con destruturing

class Table extends Component {
  state = {
    contactsToRender: [...copyOfJson].splice(0, 5),
  };

  addRandom = () => {
    this.setState((previousState) => {
      let remainingContacts = copyOfJson.filter(
        (contact) => !previousState.contactsToRender.includes(contact)
      );
      let randomNumber = Math.floor(Math.random() * remainingContacts.length);

      if (remainingContacts.length > 0) {
        return {
          contactsToRender: [
            remainingContacts[randomNumber],
            ...previousState.contactsToRender,
          ],
        };
      }
    });
  };

  sortByName = () => {
    this.setState((previousState) => {
      let sortedByName = previousState.contactsToRender.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return {
        contactsToRender: [...sortedByName],
      };
    });
  };

  sortByPopularity = () => {
    this.setState((previousState) => {
      let sortedbyPopularity = previousState.contactsToRender.sort(
        (a, b) => b.popularity - a.popularity
      );
      return {
        contactsToRender: [...sortedbyPopularity],
      };
    });
  };

  remove = (id) => {
    this.setState((previousState) => {
      let listWithOutRemoved = previousState.contactsToRender.filter(
        (contact) => contact.id !== id
      );
      return {
        contactsToRender: [...listWithOutRemoved],
      };
    });
  };
}

export default Table;
