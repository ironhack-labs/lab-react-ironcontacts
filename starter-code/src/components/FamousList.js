import React from "react";
import Contacts from "../contacts.json";

export const FamousList = () => {
  let list = [];

  for (let i = 0; i < 5; i++) {
    list.push(Contacts[i]);
  }

  return (
    <table className="listFamous">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>

      <tbody>
        {list.map((person, i) => {
          console.log(person.name, i);
          return (
            <tr key={i}>
              <td>
                <img src={person.pictureUrl} style={{ width: "100px" }} />
              </td>
              <td>{person.name}</td>
              <td>{person.popularity}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
