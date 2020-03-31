import React from 'react';

const Header = ({addRandomContact, sortByPopularity}) => {
    return (
    <div className="">
    <h1>Iron Contacts</h1>
    <button onClick={addRandomContact}>Add Random Contact</button>
    <button onClick={sortByPopularity}>Sort by Popularity</button>
    <table>
      <tr>
        <td><b>Picture</b></td>
        <td><b>Name</b></td>
        <td><b>Popularity</b></td>
      </tr>
      </table>
      </div>
    )
}

export default Header;