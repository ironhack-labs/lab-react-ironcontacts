import React from "react";

function CardContact(props) {
  const { contact } = props;
  return (
    <div className="table-contact">
      <table>
        <tr>
          <th className="picture-table"> 
            <img src={contact.pictureUrl} alt="" />
          </th>
          <th className="name-table">
            <h3>{contact.name}</h3>
          </th>
          <th className="popul-table">
            <p>{contact.popularity}</p>
          </th>
        </tr>
      </table>
    </div>
  );
}

export default CardContact;
