import React from 'react';
import Celebrities from './celebrities'



const Header = () => {
    
    return(
    <>
    <h1>Iron Contacts</h1>
            
    <button onClick={Celebrities.clickHandler}>Add random contact</button>            

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