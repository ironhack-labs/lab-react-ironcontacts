import React from "react";

const TableRow = ({ pictureUrl, name, popularity }) => {
    return (          
        <tr>
          <td><img src={pictureUrl} height="150"/></td>
          <td>{name}</td>
          <td>{popularity}</td>
        </tr>
    );
};

export default TableRow;