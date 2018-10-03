import React from "react";

const ListDisplay = ({ picUrl, name, popularity }) => {
  return (
    <div>
      <h1>Iron Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={picUrl} alt={name} />
            </td>
            <td>{name}</td>
            <td>{popularity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListDisplay;
