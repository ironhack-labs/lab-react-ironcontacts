import React, { Component } from "react";
import contacts from "./contacts.json";

export class Contact extends Component {
  constructor(props) {
    super();
    this.state = {
      contacts: contacts
    };
  }

  render() {
    let myContacts = this.state.contacts.slice(0, 5).map(ele => {
      return (
        <tr key={ele.name}>
          <td>
            <img width={100} src={ele.pictureUrl} />
          </td>
          <td>{ele.name}</td>
          <td>{ele.popularity}</td>
        </tr>
      );
    });
    return (
      <div>
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {myContacts}
          </tbody>
        </table>
      </div>
    )
  }
}

// const addContacts = () => {
//   for (let i = 0; i < 5; i++) {
//     myContactArr.push(contacts[i]);
//   }
//   console.log(myContactArr);
// };

// export const Table = () => {
//   addContacts();
//   return (

//           <tr>
//             <th>Picture</th>
//             <th>Name</th>
//             <th>Popularity</th>
//           </tr>

//   );
// };

// export const Contact = () => {
//   return (

//       <div>
//         {myContactArr.map(e => (
//           <tr key={e.name}>
//             <td>
//               <img width={100} src={e.pictureUrl} />
//             </td>
//             <td>{e.name}</td>
//             <td>{e.popularity}</td>
//           </tr>
//         ))}
//       </div>

//   );
// };
