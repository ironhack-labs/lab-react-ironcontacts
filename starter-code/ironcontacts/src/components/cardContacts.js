import React from "react";
import './styles/cardContacts.css'
const Contacts = props => {
  return (
    <tr className='contact margin'>
      < td className = "col-md-6 .mr-md-9" >
        < img className = "img-fluid "
        src = {
          props.pictureUrl
        }
        alt = {
          props.name
        }
        />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td>
        < button className = "btn btn-danger"
        onClick = {
          props.deleteContact
        } > Delete < /button>
      </td>
    </tr>
  );
};

export default Contacts;
