import React, { Component } from "react";
import Contacts from "../contacts.json";

import "../App.css";

export class StarTable extends Component {
  render() {
    const StarsFromContacts = [...Contacts].slice(0, 5);
    const StarlistInit = StarsFromContacts.map((S) => (
      <tr key={S.id}>
        <td>
          <img src={S.pictureUrl} alt="" />
        </td>
        <td>{S.name}</td>
        <td>{S.popularity}</td>
      </tr>
    ));

    console.log(StarsFromContacts);

    return (
      <div>
        <table className="tableau">
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </thead>
          <tbody>{StarlistInit}</tbody>
        </table>
      </div>
    );
  }
}

export default StarTable;
