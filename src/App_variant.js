// import "./App.css";
// import Contacts from "./contacts.json";
// import AddRandomContact from "./components/AddRandomContact";
// import { useState } from 'react';
// import DeleteContact from "./components/DeleteContact";
// import {ContactList} from "./components/ContactList";

// function App() {
//   const [contacts, setContacts] = useState(Contacts.slice(5, 10));

//   const deleteContact = contactId => {
//     const filteredContacts = contacts.filter(contact => {
//         return contact.id !== contactId;
//     });

//     setContacts(filteredContacts);
// };

//   return (
//     <div className="App">
//       <table>
//       <thead>
//         <tr>
//             <th colSpan="7"><h1>IronContacts</h1></th>
//         </tr>
//         <tr>
//             <th colSpan="7"><AddRandomContact handleAddRandomContact={setContacts} /></th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr className="Headers">
//           <td>Picture</td>
//           <td>Name</td>
//           <td>Popularity</td>
//           <td>Won Oscar</td>
//           <td>Won Emmy</td>
//           <td>Actions</td>
//         </tr>

//         <ContactList contacts={contacts} />
//       </tbody>
//       </table>
//     </div>
//   );
// };

// export default  App;
