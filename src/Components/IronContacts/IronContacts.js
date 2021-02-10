import React from 'react';
import contacts from '../../contacts.json';
import "./IronContacts.css"

export default function IronContacts() {
  const [fiveFirst, setFiveFirst] = React.useState(contacts.slice(0, 5));

  return (
    <table className="inline-table">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {fiveFirst.map(function (i) {
          return (
            <tr>
              <td>
                <img src={i.pictureUrl} width="70" height="100" />
              </td>
              <td key={i.name}>{i.name}</td>
              <td key={i.popularity}>{Math.round(i.popularity)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
