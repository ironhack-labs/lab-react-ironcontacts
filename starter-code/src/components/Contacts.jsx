import React from 'react';

const Contacts = props => {
  return (
    <div>
      <button onClick={props.addRandomContact}>Add Random Contact</button>
      <button onClick={props.sortByName}>Sort by Name</button>
      <button onClick={props.sortByPopularity}>Sort by Popularity</button>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {props.artists.map((artist, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <img src={artist.pictureUrl} alt="contacts img" />
                </td>
                <td>{artist.name}</td>
                <td>{artist.popularity}</td>
                <td>
                  <button
                    onClick={() => {
                      props.deleteContact(idx);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Contacts;
