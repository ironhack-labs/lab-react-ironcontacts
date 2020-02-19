import React from "react";

const Contact = props => {
  const style = {
    width: "100px"
  };

  return (
    <tr>
      <td>
        <img style={style} src={props.data.pictureUrl} alt="" />
      </td>
      <td>{props.data.name}</td>
      <td>{props.data.popularity}</td>
      <td>
        <button onClick={props.action} id={props.data.id}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Contact;
