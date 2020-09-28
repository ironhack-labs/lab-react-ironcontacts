// import React from 'react';
// import contacts from './contacts.json';

// class ContactList extends React.Component {
//     state = {
//       contacts: this.props.contacts.slice(0, 5) || [],
//       sortedBy: null
//     }
  
//     onClickRandomContact = () => {
//       const randContact = this.props.contacts[Math.floor(Math.random() * this.props.contacts.length)];
  
//       if (randContact) {
//         this.setState({
//           contacts: [randContact, ...this.state.contacts]
//         })
//       }
//     }
  
//     onClickSortContacts(sortKey) {
//       const contacts = [...this.state.contacts].sort((c1, c2) => {
//         switch (sortKey) {
//           case 'name':
//             return c1.name.localeCompare(c2.name);
//           case 'popularity':
//             return c2.popularity - c1.popularity;
//         }
//       });
  
//       this.setState({
//         contacts: contacts,
//         sortedBy: sortKey
//       });
//     }
  
//     onClickDeleteContact(contact) {
//       this.setState({
//         contacts: this.state.contacts.filter(c => c !== contact)
//       });
//     }
  
//     render() {
//       return (
//         <div className="ContactList">
         
//           <table className="table">
//             <thead>
//               <tr>
//                 <th scope="col">Picture</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Popularity</th>
//                 <th scope="col"></th>
//               </tr>
//             </thead>
  
//             <tbody>
//               {this.state.contacts.map((contact, index) => (
                
//               )}
//             </tbody>
//           </table>
//         </div>
//       );
//     }
//   }
  
//   export default ContactList