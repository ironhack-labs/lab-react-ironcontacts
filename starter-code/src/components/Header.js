import React from 'react';
import Display from './Contacts'

const Header = () => {
    return(
    <>
    <h1>Iron Contacts</h1>
    <button className="addButton" onClick={Display.addRandomContact}>Add random Contact</button>
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