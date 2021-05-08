import React from "react";

export default function Contact(props) {
  const { name, pictureUrl, popularity, id } = props;
  return (
    <table>
      <tr>
        <th>
          <img src={pictureUrl} />
        </th>
        <th>{name}</th>
        <th>{Math.round(popularity * 100) / 100}</th>
      </tr>
    </table>
  );
}
