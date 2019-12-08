import React from "react";

const TableContacts = (props) => {
    return (

        <tr>
            <td><img src={props.pictureUrl} alt={props.name} width="150px" /></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td><button className="btn" onClick={props.delete}>Delete</button></td>
        </tr>
  );
};

export default TableContacts; 