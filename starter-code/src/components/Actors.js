import React, { Component } from "react";

const Actors = ({ name, pictureUrl, popularity }) => {
  return (
    <div>
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <tr>
          <td>
            <img src={pictureUrl} />
          </td>
          <td>{name}</td>
          <td>{popularity}</td>
        </tr>
      </table>
    </div>
  );
};

export default Actors;
