import React from 'react';

export default function ContactsList(props) {
  const contacts = props.contacts.map((contact) => {
    return (
      <tr key={contact.id}>
        <td>
          <img src={contact.pictureUrl} alt="Photo" width="90px" />
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
      </tr>
    );
  });
  console.log(contacts);
  //   return (
  //     <table class="table">
  //       <tr>
  //         <th>Picture</th>
  //         <th>Name</th>
  //         <th>Popularity</th>
  //       </tr>
  //       {contacts}
  //     </table>
  //   );
}
