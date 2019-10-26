import React from "react";
// should not have a state
function ContactCard(props) {
  let { name, pictureUrl, popularity, oneDelete } = props;
  return (
    <div>
      Name: {name}
      Picture: <img src={pictureUrl} alt="" width="100" />
      Popularity: {popularity}
      <button onClick={oneDelete}></button>
    </div>
  );
}
// class ContactCard extends Component {
//   render() {
//     return (
//       <tr>
//         <td>{this.props.name}</td>
//         <td>
//           <img src={this.props.img} width="100" height="150" alt="img" />
//         </td>
//         <td>{this.props.pop}</td>
//       </tr>
//     );
//   }
// }
export default ContactCard;
// {Data.map(e=>{
// return <...data={e}/>
// }
