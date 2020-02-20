import React from "react";

const Table = props => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.contacts.map((contact, index) => {
            const { name, pictureUrl, popularity } = contact;
            return (
              <tr key={index}>
                <td>
                  <img className="table-img" src={pictureUrl} alt="" />
                </td>
                <td>{name}</td>
                <td>{popularity.toFixed(2)} </td>
                <td>
                  <button
                    onClick={() => {
                      props.deleteContact(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
