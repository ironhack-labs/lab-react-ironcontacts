import React from 'react';

function Table(props) {
    return(
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </tbody>
          <tbody>
            {
              props.myContacts.map( (contact, index) => {
                return (
                  <tr key={index}>
                    <td><img className="movie-img" src={contact.pictureUrl} alt="movie-img"/></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td><button id={index} className="btn" onClick={props.onClick}>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    )
}

export default Table;