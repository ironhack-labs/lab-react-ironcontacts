import React from 'react';
import Logo from '../logo.svg'
import '../styles/Header.css'

const Header = () => {
    return ( 
        <header>
            <img src={Logo} alt="logo"></img>
            <h1>IronContacts</h1>
        </header>
     );
}
 
export default Header;