import React from "react";

const ContactRow = props => {
  return (
      <tr>
        <td>
          <img src={props.celebrityProp.pictureUrl} alt="" />
        </td>
        <td>{props.celebrityProp.name}</td>
        <td>{props.celebrityProp.popularity}</td>
        <td><button onClick={props.deleteCelebrity}>Delete celebrity</button>
        </td>
      </tr>

  );
};

export default ContactRow