import React from 'react';
import './Contacts.css';
import contacts from '../../contacts.json';

class Contacts extends React.Component {
  state = { contacts };

  //top 5
  top5 = () => {
    console.log(`Top 5 button clicked`);
    const contactsCopy = [...this.state.contacts];
    const topFive = contactsCopy.slice(0, 5);
    console.log(`Top Five Copy`, topFive);

    this.setState({
      contacts: topFive,
    });
  };

  //Add random celebrity to state.
  addRandom = () => {
    console.log(`Random button clicked`);

    const remainingContacts = contacts.slice(5, contacts.length);
    console.log(`Remaining Contacts`, remainingContacts);

    const addRandom =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    console.log(`addRandom: `, addRandom);

    const topFive = this.state;
    console.log(`TOPFIVE`, topFive);
    console.log(`TOP 5 Array: `, topFive.contacts);

    const random = topFive.contacts.concat(addRandom);
    console.log(`Random: `, random);

    this.setState({
      contacts: random,
    });
  };

  render() {
    console.log(`STATE: `, this.state.contacts);

    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.top5}>Top 5</button>
        <button onClick={this.addRandom}>Add Random Contact</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          {this.state.contacts.map((contact) => {
            return (
              <tbody key={contact.id}>
                <tr>
                  <td>
                    <img
                      className="mugshot"
                      src={contact.pictureUrl}
                      alt="mugshot"
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}
export default Contacts;

// top5 = () => {
//     //using state passing a function instead of an object
//     console.log('I am being clicked');
//     this.setState((contacts) => ({
//       contacts: contacts.slice(0, 5),
//     }));
//   };

//   render() {
//     const { contacts } = this.state;
//     console.log(`CONTACTS: `, contacts);

//     return (
//       <div>
//         <h1>IronContacts</h1>
//         <button onClick={this.top5}>Toggle Paragraph</button>

//         <table>
//           <thead>
//             <tr>
//               <th>Picture</th>
//               <th>Name</th>
//               <th>Popularity</th>
//             </tr>
//           </thead>
//           {contacts.map((contact) => {
//             return (
//               <tbody key={contact.id}>
//                 <tr key={contact.id}>
//                   <td>
//                     <img
//                       className="mugshot"
//                       src={contact.pictureUrl}
//                       alt="mugshot"
//                     />
//                   </td>
//                   <td>{contact.name}</td>
//                   <td>{contact.popularity.toFixed(2)}</td>
//                 </tr>
//               </tbody>
//             );
//           })}
//         </table>
//       </div>
//     );
//   }
// }
