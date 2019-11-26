import React from "react";

export default function ContactCard({ picture, name, popularity }) {
  return (
    <>
      <tr>
        <td>
          <img src={picture} alt="celebrity" />
        </td>
        <td>{name}</td>
        <td>{popularity}</td>
      </tr>
    </>
  );
}
