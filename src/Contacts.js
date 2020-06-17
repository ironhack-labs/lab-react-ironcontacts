import React from 'react';

export default function Contacts(props) {
  return (
    <table>
      <tr>
        <img src={props.pictureUrl} alt="oh well" />
        <th>{props.name}</th>
        <th>{props.popularity}</th>
        <button
          onClick={() => {
            props.delete(props.name);
          }}
        >
          Delete a celebrity
        </button>
      </tr>
    </table>
  );
}
