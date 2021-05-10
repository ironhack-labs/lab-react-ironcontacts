import React from "react";

export default function Contact(props) {
  const { name, pictureUrl, popularity, id } = props;
  return (
    <table>
      <tr>
        <td>
          <img src={pictureUrl} />
        </td>
        <td>{name}</td>
        <td>{Math.round(popularity * 100) / 100}</td>
      </tr>
    </table>
  );
}
