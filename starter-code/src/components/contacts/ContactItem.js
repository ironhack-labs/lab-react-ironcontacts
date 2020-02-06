import React from "react";

const ContactItem = ({ name, pictureUrl, popularity, onClickDeleteContact }) => (
  <div className="Fila">

    <table className="table">
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Name</th>
          <th scope="col">Popularity</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src={pictureUrl} alt="No picture found"/></td>
          <td>{name}</td>
          <td>{popularity}</td>
          <td><button className="btn btn-danger" onClick={onClickDeleteContact}>X</button></td>
        </tr>

      </tbody>
    </table>
  </div>
);

export default ContactItem;
