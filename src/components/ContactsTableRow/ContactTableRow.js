import React from 'react';

const ContactTableRow  = props => {
  return (
    <tr className="contact-row">
      <td>
        <img src={props.contact.pictureUrl} alt={props.contact.name} />
      </td>
      <td>
        {props.contact.name}
      </td>
      <td>
        {props.contact.popularity}
      </td>
    </tr>
  );
}

// class ContactTableRow extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     // Aqui dentro do return que escrevemos o nosso JSX
//     return (
//       <tr className="contact-row">
//         <td>
//           <img src={this.props.contact.pictureUrl} alt={this.props.contact.name} />
//         </td>
//         <td>
//           {this.props.contact.name}
//         </td>
//         <td>
//           {this.props.contact.popularity}
//         </td>
//       </tr>
//     );
//   }
// }

export default ContactTableRow;
