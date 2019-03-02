import React from 'react';

const Header = (props) => {
  return(
    <div>
      <h1>Iron Contacts</h1>
      <button className="col-lg-2" onClick={props.addContact}>ADD CONTACT</button>
      <button className="col-lg-2" onClick={props.sortName}>sort by name</button>
      <button className="col-lg-2" onClick={props.sortPopularity}>sort by popularity</button>
      <ul className="list-group list-group-horizontal-lg">
        <li className="list-group-item col-lg-3">Picture</li>
        <li className="list-group-item col-lg-3">Name</li>
        <li className="list-group-item col-lg-3">Popularity</li>
        <li className="list-group-item col-lg-3">Delete</li>
      </ul>  
    </div>
  )
}

export default Header;