import React from "react";

export const ContactItem = ({ picture, name, popularity }) => (
  <table>
    <tbody>
      <tr>
        <td>
          <img src={picture} alt="contact image" />
        </td>
        <td>{name}</td>
        <td>{popularity}</td>
      </tr>
    </tbody>
  </table>
);
