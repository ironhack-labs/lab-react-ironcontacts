import React from 'react';

function Contacts(props) {
  return (
    <div>
      <table>
        <tr>
          <td>
            <img src={props.pictureUrl} width="150" height="150" />
          </td>
          <td>{props.name}</td>
          <td>{props.popularity}</td>
					<td><button onClick={props.clickToDelete}>Delete</button></td>
        </tr>
      </table>
    </div>
  );
}

export default Contacts;
