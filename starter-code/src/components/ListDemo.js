import React from "react";



export const AddRandomContact = ({datasrc})=>{
  let randomContact = [];
  randomContact.push(datasrc[Math.floor(Math.random()*datasrc.length)]);
  console.log(randomContact)
  return(
    <tr key={randomContact.name}>
          <td>
            <img src={randomContact.pictureUrl} height="100" width="100" />
          </td>
          <td>{randomContact.name}</td>
          <td>{randomContact.popularity}</td>
        </tr>

  );
  
}





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


