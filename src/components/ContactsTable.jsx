import React from 'react';

const ContactsTable = (props) => {
  return (
    <>
    <tr>
      <td>
        <img src={props.contact.pictureUrl} alt="contact" width={80} />
      </td>
      <td>{props.contact.name}</td>
      <td>{Math.round(props.contact.popularity * 100) / 100}</td>
      <td>{props.contact.wonOscar ? '🏆' : ''}</td>
      <td>{props.contact.wonEmmy ? '🏆' : ''}</td>
      <td><button className="btn remove" onClick={()=>props.remove(props.contact.id)}>Delete</button></td>

    </tr>
    </>
  );
};

export default ContactsTable;
