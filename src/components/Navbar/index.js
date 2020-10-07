import React from 'react';
import { BsGrid3X3Gap, BsTable} from "react-icons/bs";
const Navbar = ({addContact, sortByName, isInGrid, sortByPop, toggleDisplay, toggleBtnText}) => {
    return (
        <nav className="nav">
            <div className="brand">
                <h1 className="brand-text">Iron Contact</h1>
            </div>
            <div className="navbar">
                <button className="btn btn-nav" id="add-new" onClick= {(e) => addContact(e)}>
                    Add a New Contact
                </button>

                <button className="btn btn-nav" id="sort-name" onClick= {(e) => sortByName(e)}>
                    Sort by name
                </button>

                <button className="btn btn-nav"  id="sort-popularity" onClick= {(e) => sortByPop(e)}>
                    Sort by popularity
                </button>

                <button className="btn btn-toggle"  id="toddle" onClick= {(e) => toggleDisplay(e)}>
                    
                    {isInGrid ? ( 
                        <BsTable />
                    ) : (
                        
                        <BsGrid3X3Gap />
                    )}
                </button>
            </div>
        </nav>
    )
}
export default Navbar;
