import React from "react";
import ConctactList from "../ContactList/ContactList.js";

export default class Table extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <ConctactList />
      </table>
    );
  }
}
