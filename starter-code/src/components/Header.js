import React from 'react';

const Header = ({addRandomContact}) => {
    return(
    <>
    <h1>Iron Contacts</h1>
    <button onClick={addRandomContact}>Add Random Contact
    </button>
    <table>
      <tr>
        <td><b>Picture</b></td>
        <td><b>Name</b></td>
        <td><b>Popularity</b></td>
      </tr>
      </table>
      </>
    )
}

export default Header;