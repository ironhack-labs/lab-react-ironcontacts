import React from 'react';
import logo from '../../logo.svg';
import './Header.css'

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="title">IRON CONTACTS</h1>
    </header>
  )
}

export default Header;