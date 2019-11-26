import React from "react";

export default function Contact({ pictureUrl, name, popularity }) {
  return (
    <tr>
      <td>
        <img src={pictureUrl} className="Image" />
      </td>
      <td>{name}</td>
      <td>{popularity}</td>
    </tr>
  );
}
