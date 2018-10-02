import React from "react";

export const ContactList = ({ datasrc }) => {
  let firstContacts = datasrc.slice(0, 5);
  const showContacts = () => {
    return firstContacts.map((oneContac, indx) => {
      return (
        <tr key={oneContac.name}>
          <td>
            <img src={oneContac.pictureUrl} height="100" width="100" />
          </td>
          <td>{oneContac.name}</td>
          <td>{oneContac.popularity}</td>
        </tr>
      );
    });
  };
  console.log(firstContacts);
  return <tbody>{showContacts()}</tbody>;
};
