import React from "react";
import contacts from "../contacts.json";

const fiveCeleb = contacts.slice(0, 5);

class TabContacts extends React.Component {
  render() {
    return (
      <table>
        
        <thead>
          <tr>
            <th>PICTURE</th>
            <th>NAME</th>
            <th>POPULARITY</th>
          </tr>
        </thead>
        <tbody>
          {fiveCeleb.map(oneCeleb => (
            <tr>
              <td>
                <img src={oneCeleb.pictureUrl} alt={oneCeleb.name} width="60px" height="60px" />
              </td>
              <td>{oneCeleb.name}</td>
              <td>{oneCeleb.popularity.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TabContacts;
