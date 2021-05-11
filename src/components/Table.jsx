import React from 'react'
import Contact from "./Contact";
import Button from "./Button";

import "./Table.css"

function Table(props) {
    const {sortName, sortPopularity, deleteContact, contactsArr} = props;
    return (
        <table>
        <thead>
          <tr>
            <td></td>
            <td>
              {" "}
              <Button onClick={sortName}>Sort by name</Button>
            </td>
            <td>
              {" "}
              <Button onClick={sortPopularity}>Sort by popularity</Button>
            </td>
          </tr>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contactsArr.map((contact) => {
            return (
              <Contact
                key={contact.id}
                {...contact}
                deleteContact={deleteContact}
              />
              /* Up most parent is the component itself. Which is why we need to add the key here */
              // <tr key={contact.id}>
              //   <td>{contact.name}</td>
              //   <td>
              //     <img src={contact.pictureUrl} width="100px" />
              //   </td>
              //   <td>{contact.popularity.toFixed(2)}</td>
              //   <td>
              //     <button onClick={() => deleteContact(contact.id)}>
              //       Delete
              //     </button>
              //   </td>
              // </tr>
            );
          })}
        </tbody>
      </table>
    )
}

export default Table
