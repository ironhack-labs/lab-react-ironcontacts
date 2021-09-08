import React from "react";

const TableRow = (props) => {
  return (
    <tr className="contact-row">
      <td>
        <img src={props.contact.pictureUrl} alt={props.contact.name} />
      </td>
      <td>{props.contact.name}</td>
      <td>{props.contact.popularity}</td>
    </tr>
  );
};

export default TableRow;
