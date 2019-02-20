import React, { Component } from 'react';
import './Header.css';
import logo from '../logo.svg';

class Header extends Component {

    render() {
        return (
            <header className='Header'>
                <h1>My IronContacts App</h1>
            </header>
        );
    }
}

export default Header;