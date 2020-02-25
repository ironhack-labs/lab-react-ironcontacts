import React from "react";
import ConctactList from "../ContactList/ContactList.js";

export default class Table extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <th>Image</th>
          <th>Name</th>
          <th>Popularity</th>
        </thead>
        <ConctactList />
      </table>
    );
  }
}
